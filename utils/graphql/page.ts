import gql from 'graphql-tag';
import { DocumentNode } from 'graphql';
import { ComponentEnum, COMPONENT_MAP, ComponentOptions } from 'config';
import { capitalizeFirstLetter } from 'utils/helpers';
import { getGeneratedQueryData } from './fetch';
import { CollectionTypePage, CollectionTypeQuery, CollectionTypeTeasers, GeneratedQuery, SingleTypePage, SingleTypeQuery } from './types';
import { getDataFromCollection, notNull } from './helpers';
import { PAGINATION } from 'graphql/components/pagination';
import { COMPONENT_SHARED_TEASER } from 'graphql/components/sharedTeaser';
import { ComponentSharedTeaserFragment, Maybe, PaginationFragment } from 'graphql/types';
import { StrapiTeaserProps } from 'components/strapi/StrapiTeaser';

export type SingleTypePageQuery<T extends object = {}> = SingleTypeQuery<SingleTypePage<T>>;
export type CollectionTypePageQuery<T extends object = {}> = CollectionTypeQuery<CollectionTypePage<T>>;
export type CollectionTypeTeasersQuery<T extends object = {}> = CollectionTypeQuery<CollectionTypeTeasers<T>>;

const getFragmentsNode = (nodes: DocumentNode[]): DocumentNode => {
    return nodes.reduce(
        (a, c) =>
            gql`
                ${a}
                ${c}
            `,
        '' as unknown as DocumentNode
    );
};

const getFragments = (
    hero: ComponentEnum[] = [],
    content: ComponentEnum[] = []
): {
    nodes: DocumentNode[];
    fragmentsContent: string[];
    fragmentsHero: string[];
} => {
    const defaultComponents = Array.from<[ComponentEnum, ComponentOptions]>(COMPONENT_MAP).filter(([_, value]) => value.default);
    const documents: ComponentEnum[] = [...content, ...hero, ...defaultComponents.map(([key]) => key)];

    const nodes = documents.reduce<DocumentNode[]>((a, c) => {
        const node = COMPONENT_MAP.get(c)?.fragment;
        return node ? [...a, node] : a;
    }, []);

    const defaultComponentsContent = defaultComponents.filter(([_, value]) => !value.hero).map(([key]) => key);
    const defaultComponentsHero = defaultComponents.filter(([_, value]) => value.hero).map(([key]) => key);

    const fragmentsContent = [...content, ...defaultComponentsContent].map((component) => `...${component}`);
    const fragmentsHero = [...hero, ...defaultComponentsHero].map((component) => `...${component}`);

    return {
        nodes,
        fragmentsContent,
        fragmentsHero
    };
};

export const getTeasersQuery = ({
    contentType,
    filter,
    attributes
}: {
    contentType: string;
    attributes?: string[];
    filter?: Maybe<string>;
}) => gql`
    ${PAGINATION}
    ${COMPONENT_SHARED_TEASER}

    query Teasers${capitalizeFirstLetter(contentType)}($locale: I18NLocaleCode, $pagination: PaginationArg, $sort: [String]) {
        ${contentType}(locale: $locale, pagination: $pagination, sort: $sort${
    filter ? `, filters: { filters: { id: { eq: "${filter}" } } }` : ''
}) {
            data {
                id
                attributes {
                   slug
                   ${attributes ?? ''}
                   teaser {
                     ...ComponentSharedTeaser
                   }
                }
            }
            meta {
                pagination {
                    ...Pagination
                }
            }
        }
    }
`;

export const getSingleTypePageQuery = ({
    hero = [],
    content = [],
    contentType
}: {
    contentType: string;
    hero?: ComponentEnum[];
    content?: ComponentEnum[];
}) => {
    const { nodes, fragmentsContent, fragmentsHero } = getFragments(hero, content);

    return gql`
        ${getFragmentsNode(nodes)}

        query SingleType${capitalizeFirstLetter(contentType)}Page($locale: I18NLocaleCode) {
            ${contentType}(locale: $locale) {
                data {
                    attributes {
                        title
                        hero {
                            __typename
                            ${fragmentsHero}
                        }
                        flexContent {
                            __typename
                            ${fragmentsContent}
                        }
                    }
                }
            }
        }
    `;
};

export const getCollectionTypePageQuery = ({
    hero = [],
    content = [],
    contentType
}: {
    contentType: string;
    hero?: ComponentEnum[];
    content?: ComponentEnum[];
}) => {
    const { nodes, fragmentsContent, fragmentsHero } = getFragments(hero, content);

    return gql`
        ${getFragmentsNode(nodes)}

        query CollectionType${capitalizeFirstLetter(contentType)}Page($locale: I18NLocaleCode, $slug: String!) {
            ${contentType}(locale: $locale, filters: { slug: { eq: $slug } }) {
                data {
                    attributes {
                        slug
                        title
                        hero {
                            __typename
                            ${fragmentsHero}
                        }
                        flexContent {
                            __typename
                            ${fragmentsContent}
                        }
                    }
                }
            }
        }
    `;
};

export const getCollectionTypePathsQuery = ({ contentType }: { contentType: string }) => gql`
    query CollectionType${capitalizeFirstLetter(contentType)}Paths($locale: I18NLocaleCode) {
        ${contentType}(locale: $locale) {
            data {
                attributes {
                    slug
                }
            }
        }
    }
`;

export const getSingleTypePage = async <T extends object>({
    contentType,
    locale,
    variables
}: GeneratedQuery): Promise<SingleTypePage<T> | undefined> => {
    const response = await getGeneratedQueryData<SingleTypePageQuery<T>>({
        contentType,
        tags: ['SingleTypePageQuery'],
        locale,
        variables,
        generateQuery: getSingleTypePageQuery
    });

    return response[contentType].data?.attributes;
};

export const getCollectionTypePage = async <T extends object>({
    contentType,
    locale,
    variables,
    slug
}: GeneratedQuery & { slug: string }): Promise<CollectionTypePage<T> | undefined> => {
    const response = await getGeneratedQueryData<CollectionTypePageQuery<T>>({
        contentType,
        tags: ['CollectionTypePageQuery'],
        locale,
        variables: variables ? { ...variables, slug } : { slug },
        generateQuery: getCollectionTypePageQuery
    });

    return getDataFromCollection(response[contentType].data);
};

export const getCollectionTypePaths = async ({ contentType, locale, variables }: GeneratedQuery): Promise<{ slug: string }[]> => {
    const response = await getGeneratedQueryData<CollectionTypePageQuery<{ slug: string }>>({
        contentType,
        tags: ['CollectionTypePaths'],
        locale,
        variables,
        generateQuery: getCollectionTypePathsQuery
    });

    const data = response[contentType].data?.filter(notNull) ?? [];
    return data.map((path) => ({ slug: path.attributes.slug }));
};

export const getCollectionTeasers = async ({
    contentType,
    locale,
    variables
}: GeneratedQuery): Promise<{ teasers: StrapiTeaserProps[]; pagination?: PaginationFragment }> => {
    const response = await getGeneratedQueryData<CollectionTypeTeasersQuery>({
        contentType,
        tags: ['CollectionTypePageQuery'],
        locale,
        variables,
        generateQuery: getTeasersQuery
    });

    const data = response[contentType].data?.filter(notNull) ?? [];
    const pagination = (response && response[contentType].meta?.pagination) ?? undefined;

    return {
        teasers: data.map((data) => ({
            id: data.id,
            slug: data.attributes.slug,
            fragment: data.attributes.teaser
            // slug: path.join('/', ...(options?.slugPath ? [options.slugPath] : []), data.attributes.slug)
        })),
        pagination
    };
};
