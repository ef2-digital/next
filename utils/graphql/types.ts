import { ComponentSharedTeaserFragment, Maybe, PaginationFragment } from 'graphql/types';

export type DynamicZone = DynamicZoneContent[] | null;
export type DynamicZoneContent<T extends object = {}> = (T & { __typename: string }) | null;

export type ContentTypeQueryDataAttributes<T extends object = {}> = {
    id: string;
    attributes: T;
};

export type SingleTypeQuery<T extends object = {}> = {
    [key: string]: {
        data?: ContentTypeQueryDataAttributes<T>;
    };
};

export type CollectionTypeQuery<T extends object = {}> = {
    [key: string]: {
        data?: ContentTypeQueryDataAttributes<T>[];
        meta?: { pagination: PaginationFragment };
    };
};

export type SingleTypePage<T extends object = {}> = T & {
    title: string;
    hero: DynamicZone;
    flexContent: DynamicZone;
};

export type CollectionTypePage<T extends object = {}> = T &
    SingleTypePage<{
        slug: string;
    }>;

export type Component<T extends object = {}> = {
    fragment: T;
    className?: string;
};

export type GeneratedQuery = {
    contentType: string;
    locale?: Maybe<string>;
    variables?: object;
};

export type CollectionTypeTeasers<T extends object = {}> = T & {
    slug: string;
    teaser: ComponentSharedTeaserFragment;
};
