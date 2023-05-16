import gql from 'graphql-tag';
import { cache } from 'react';
import { NavigationItem } from '@ef2/content-components-react';
import { print, DocumentNode } from 'graphql';
import { NAVIGATION } from 'graphql/components/navigation';
import { ComponentSharedSeoFragment, NavigationQuery } from 'graphql/types';
import { capitalizeFirstLetter, getNavigationItems } from './helpers';
import { COMPONENT_SHARED_SEO } from 'graphql/components/sharedSeo';
import { Metadata } from 'next';

export const fetchGraphql = cache(async <T extends object>(query: DocumentNode | string, variables?: object): Promise<T> => {
    const body = typeof query === 'string' ? JSON.stringify({ query, variables }) : JSON.stringify({ query: print(query), variables });

    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql?revalidate=${Date.now()}`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body
    });

    const data: { data: T; errors?: { message: 'string' }[] } = await response.json();

    if (data.errors) {
        throw new Error(data.errors[0].message);
    }

    return data.data;
});

export const getSeoQuery = (contentType: string) => gql`
    ${COMPONENT_SHARED_SEO}

    query SingleType${capitalizeFirstLetter(contentType)}Seo($locale: I18NLocaleCode!) {
        ${contentType}(locale: $locale) {
            data {
                attributes {
                    seo {
                        ...ComponentSharedSeo
                    }
                }
            }
        }
    }
`;

export const getCollectionPathsQuery = (collection: string) => gql`
    query Collection${capitalizeFirstLetter(collection)}Paths($locale: I18NLocaleCode) {
        ${collection}(locale: $locale) {
            data {
                attributes {
                    slug
                }
            }
        }
    }
`;

export const getSeoCollectionQuery = (contentType: string) => gql`
    ${COMPONENT_SHARED_SEO}

    query Collection${capitalizeFirstLetter(contentType)}Seo($locale: I18NLocaleCode!, $slug: String!) {
        ${contentType}(locale: $locale, filters: { slug: { eq: $slug } }) {
            data {
                attributes {
                    seo {
                        ...ComponentSharedSeo
                    }
                }
            }
        }
    }
`;

export type SingleTypeQuery<T> = {
    [key: string]: {
        data?: {
            attributes: T;
        };
    };
};

export type CollectionQuery<T> = {
    [key: string]: {
        data?: {
            attributes: T;
        }[];
    };
};

export type CollectionSeoQuery = CollectionQuery<{ seo?: ComponentSharedSeoFragment }>;
export type SingleTypeSeoQuery = SingleTypeQuery<{ seo?: ComponentSharedSeoFragment }>;

const getSeoMetadata = (seo?: ComponentSharedSeoFragment): Metadata => {
    if (!seo) {
        return {};
    }

    const image = seo.metaImage.data?.attributes;

    return {
        title: seo.metaTitle,
        robots: seo.metaRobots,
        description: seo.metaDescription,
        keywords: seo.keywords,
        viewport: seo.metaViewport,
        ...(seo.canonicalURL ? { alternates: { canonical: seo.canonicalURL } } : {}),
        ...(seo.metaTitle
            ? {
                  openGraph: {
                      title: seo.metaTitle,
                      images: [
                          ...(image?.url
                              ? [
                                    {
                                        url: `${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}?resize=1200x630`,
                                        alt: image?.alternativeText ?? '',
                                        width: 1200,
                                        height: 630
                                    }
                                ]
                              : [])
                      ]
                  }
              }
            : {})
    };
};

export const getCollectionPaths = async (contentType: string, locale?: string): Promise<{ slug: string }[]> => {
    const response = await fetchGraphql<CollectionQuery<{ slug: string }>>(getCollectionPathsQuery(contentType), { locale });
    const data = (response && response[contentType].data) ?? [];
    return data.map((path) => ({ slug: path.attributes.slug }));
};

export const getCollectionSeoMetadata = async (contentType: string, slug: string, locale?: string): Promise<Metadata> => {
    const response = await fetchGraphql<CollectionSeoQuery>(getSeoCollectionQuery(contentType), locale ? { locale, slug } : { slug });
    const collection = response && response[contentType].data?.filter(notNull);
    const data = collection && collection.length > 0 ? collection[0].attributes : undefined;
    return getSeoMetadata(data?.seo);
};

export const getSingleTypeSeoMetadata = async (contentType: string, locale?: string): Promise<Metadata> => {
    const response = await fetchGraphql<SingleTypeSeoQuery>(getSeoQuery(contentType), locale ? { locale } : undefined);
    const data = response && response[contentType].data?.attributes;
    return getSeoMetadata(data?.seo);
};

export const fetchGraphqlNavigation = async (id: string, locale: string): Promise<NavigationItem[]> => {
    const navigation = await fetchGraphql<NavigationQuery>(NAVIGATION, { id, locale });
    return navigation ? getNavigationItems(navigation) : [];
};
