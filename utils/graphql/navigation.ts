import { Maybe, NavigationItemFragment, NavigationQuery } from 'graphql/types';
import { notNull } from './helpers';
import { NAVIGATION_PATHS } from 'config';
import { NavigationItem } from 'components/navigation/NavigationLink';
import { fetchGraphql } from './fetch';
import { NAVIGATION } from 'graphql/components/navigation';

export const getNavigationItem = (item: NavigationItemFragment & { items?: (NavigationItemFragment | null)[] | null }): NavigationItem => {
    const external = item.type === 'EXTERNAL';
    const path = getNavigationItemPath(item.path ?? item.externalPath ?? '/', item.related);

    return {
        id: item.id,
        title: item.title,
        path: path.startsWith('/') || external ? path : `/${path}`,
        items: item.items?.filter(notNull).map((item) => getNavigationItem(item)),
        external
    };
};

const getNavigationItemPath = (
    path: string,
    related?: Maybe<{
        __typename?: 'NavigationItemRelatedData';
        attributes?: Maybe<{ __typename?: string; slug?: Maybe<string> }>;
    }>
) => {
    if (!related?.attributes?.__typename) {
        return path;
    }

    const relatedResult: string | true | undefined = NAVIGATION_PATHS.get(related.attributes.__typename);

    if (!relatedResult) {
        return path;
    }

    if (relatedResult === true) {
        return related.attributes.slug ?? path;
    }

    return relatedResult;
};

export const getNavigationItems = (navigation: Pick<NavigationQuery, 'navigation'>): NavigationItem[] => {
    return navigation.navigation.filter(notNull).map((item) => getNavigationItem(item));
};

export const getNavigation = async (id: string, locale: string): Promise<NavigationItem[]> => {
    const navigation = await fetchGraphql<NavigationQuery>(NAVIGATION, ['NavigationQuery', id, locale], { id, locale });
    return navigation ? getNavigationItems(navigation) : [];
};
