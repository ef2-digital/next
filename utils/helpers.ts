import { HeadingProps, NavigationItem } from '@ef2/content-components-react';
import { ComponentContentHeadingFragment, Maybe, NavigationItemFragment, NavigationQuery } from 'graphql/types';
import { ElementType } from 'react';

const getHeadingProps = (heading: ComponentContentHeadingFragment): HeadingProps => {
    return {
        titleHtml: heading.title,
        titleAs: heading.titleTag as ElementType | null
    };
};

const getNavigationItemPath = (path?: Maybe<string>) => path;

const getNavigationItems = (navigation: Pick<NavigationQuery, 'navigation'>): NavigationItem[] => {
    return navigation.navigation.filter(notNull).map((item) => getNavigationItem(item));
};

const getNavigationItem = (item: NavigationItemFragment & { items?: (NavigationItemFragment | null)[] | null }): NavigationItem => {
    const external = item.type === 'EXTERNAL';
    const path = getNavigationItemPath(item.path) || item.externalPath || '/';

    return {
        id: item.id,
        title: item.title,
        path: item.items && item.items.length > 0 ? undefined : path.startsWith('/') || external ? path : `/${path}`,
        items: item.items?.filter(notNull).map((item) => getNavigationItem(item)),
        external
    };
};

const getDataFromCollection = <T extends object>(
    pages: { data: { attributes?: T | undefined | null }[] | null } | null | undefined
): T | null | undefined => {
    const collection = pages?.data?.filter(notNull);
    return collection && Boolean(collection.length) ? collection[0].attributes : undefined;
};

const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const notNull = <T extends object>(value: T | null | undefined): value is T => {
    return value !== null && value !== undefined;
};

export {
    notNull,
    capitalizeFirstLetter,
    getHeadingProps,
    getNavigationItemPath,
    getNavigationItems,
    getNavigationItem,
    getDataFromCollection
};
