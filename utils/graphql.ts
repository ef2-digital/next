import { print, DocumentNode } from 'graphql';
import { NAVIGATION } from 'graphql/components/navigation';
import { Maybe, NavigationQuery, Page } from 'graphql/types';

export const notNull = <T extends object>(value: T | null | undefined): value is T => {
    return value !== null && value !== undefined;
};

export const fetchGraphql = async <T extends object>(query: DocumentNode | string, variables?: object): Promise<T> => {
    const body = typeof query === 'string' ? JSON.stringify({ query, variables }) : JSON.stringify({ query: print(query), variables });

    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body
    });

    return (await response.json()).data;
};

export interface NavigationItem {
    id: number | string;
    title: string;
    path: string;
    external: boolean;
    bold?: boolean;
    [key: string]: any;
}

const getNavigationItemPath = (
    path?: Maybe<string>,
    related?: Maybe<{
        __typename?: 'NavigationItemRelatedData';
        attributes?: Maybe<{ __typename?: 'Homepage' } | { __typename?: 'Page'; slug?: string }>;
    }>
) => {
    if (related?.attributes?.__typename === 'Page') {
        return (related.attributes as Page).slug;
    }

    return path;
};

export const getNavigationItems = (navigation: Pick<NavigationQuery, 'navigation'>): NavigationItem[] => {
    return navigation.navigation.filter(notNull).map((item) => {
        const external = !!item.externalPath;
        const path = getNavigationItemPath(item.path, item.related) || item.externalPath || '/';

        return {
            id: item.id,
            title: item.title,
            path: path.startsWith('/') || external ? path : `/${path}`,
            bold: !!item.bold,
            external
        };
    });
};

export const fetchGraphqlNavigation = async (id: string): Promise<NavigationItem[]> => {
    const navigation = await fetchGraphql<NavigationQuery>(NAVIGATION, { id });
    return navigation ? getNavigationItems(navigation) : [];
};
