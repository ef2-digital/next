import { cache } from 'react';
import { HeadingProps, NavigationItem } from '@ef2/content-components-react';
import { print, DocumentNode } from 'graphql';
import { NAVIGATION } from 'graphql/components/navigation';
import { ComponentContentHeadingFragment, Maybe, NavigationItemFragment, NavigationQuery } from 'graphql/types';
import { ElementType } from 'react';

export const notNull = <T extends object>(value: T | null | undefined): value is T => {
    return value !== null && value !== undefined;
};

export const fetchGraphql = cache(async <T extends object>(query: DocumentNode | string, variables?: object): Promise<T> => {
    const body = typeof query === 'string' ? JSON.stringify({ query, variables }) : JSON.stringify({ query: print(query), variables });

    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql?revalidate=${Date.now()}`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body
    });

    return (await response.json()).data;
});

export const getHeadingProps = (heading: ComponentContentHeadingFragment): HeadingProps => {
    return {
        titleHtml: heading.title,
        titleAs: heading.titleTag as ElementType | null,
        subtitle: heading.subtitle,
        subtitleAs: heading.subtitleTag as ElementType | null
    };
};

const getNavigationItemPath = (
    path?: Maybe<string>,
    related?: Maybe<{
        __typename?: 'NavigationItemRelatedData';
        attributes?: Maybe<{ __typename?: string; slug?: Maybe<string> }>;
    }>
) => {
    // if (related?.attributes?.__typename === 'Page') {
    //     return (related.attributes as Page).slug;
    // }

    // if (related?.attributes?.__typename === 'ArticlesPage') {
    //     return 'blog';
    // }

    return path;
};

export const getNavigationItems = (navigation: Pick<NavigationQuery, 'navigation'>): NavigationItem[] => {
    return navigation.navigation.filter(notNull).map((item) => getNavigationItem(item));
};

export const getNavigationItem = (item: NavigationItemFragment & { items?: (NavigationItemFragment | null)[] | null }): NavigationItem => {
    const external = item.type === 'EXTERNAL';
    const path = getNavigationItemPath(item.path, item.related) || item.externalPath || '/';

    return {
        id: item.id,
        title: item.title,
        path: item.items && item.items.length > 0 ? undefined : path.startsWith('/') || external ? path : `/${path}`,
        items: item.items?.filter(notNull).map((item) => getNavigationItem(item)),
        // bold: !!item.bold,
        external
    };
};

export const fetchGraphqlNavigation = async (id: string, locale: string): Promise<NavigationItem[]> => {
    const navigation = await fetchGraphql<NavigationQuery>(NAVIGATION, { id, locale });
    return navigation ? getNavigationItems(navigation) : [];
};
