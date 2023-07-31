import { HeadingProps, NavigationItem } from '@ef2/content-components-react';
import { ButtonProps, Variants } from 'components/layout/Button';
import { ParagraphProps } from 'components/layout/Paragraph';
import { TARGET_MAP, VARIANT_MAP } from 'config';
import {
    ComponentContentHeadingFragment,
    ComponentInputButtonFragment,
    ComponentLayoutParagraphFragment,
    Maybe,
    NavigationItemFragment,
    NavigationQuery
} from 'graphql/types';

export const getHeadingProps = (heading?: Maybe<ComponentContentHeadingFragment>): HeadingProps => {
    return {
        titleHtml: heading?.title,
        subtitle: heading?.subtitle
    };
};

export const getParagraphProps = (paragraph: ComponentLayoutParagraphFragment): ParagraphProps => {
    return {
        heading: paragraph.heading && getHeadingProps(paragraph.heading),
        prose: { html: paragraph.text },
        button: paragraph.button && getButtonProps(paragraph.button)
    };
};

export const getButtonProps = (component: ComponentInputButtonFragment): ButtonProps => {
    return {
        children: component.label,
        href: component.href,
        target: TARGET_MAP.get(component.target),
        variant: VARIANT_MAP.get(component.variant) as keyof Variants
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

export const getDataFromCollection = <T extends object>(
    pages: { data: { attributes?: T | undefined | null }[] | null } | null | undefined
): T | null | undefined => {
    const collection = pages?.data?.filter(notNull);
    return collection && Boolean(collection.length) ? collection[0].attributes : undefined;
};

export const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const notNull = <T extends object>(value: T | null | undefined): value is T => {
    return value !== null && value !== undefined;
};

export { getNavigationItemPath, getNavigationItems, getNavigationItem };
