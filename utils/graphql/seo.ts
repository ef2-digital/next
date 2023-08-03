import { ComponentSharedSeoFragment } from 'graphql/types';
import { getGeneratedQueryData } from './fetch';
import { CollectionTypeQuery, GeneratedQuery, SingleTypeQuery } from './types';
import gql from 'graphql-tag';
import { COMPONENT_SHARED_SEO } from 'graphql/components/sharedSeo';
import { capitalizeFirstLetter } from 'utils/helpers';
import { Metadata } from 'next';

export type CollectionTypeSeoQuery = CollectionTypeQuery<{ seo?: ComponentSharedSeoFragment }>;
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

export const getSeoQuery = ({ contentType }: GeneratedQuery) => gql`
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

export const getSingleTypeSeoMetadata = async ({ contentType, locale, variables }: GeneratedQuery): Promise<Metadata> => {
    const response = await getGeneratedQueryData<SingleTypeSeoQuery>({
        contentType,
        tags: ['SingleTypePageQuery'],
        locale,
        variables,
        generateQuery: getSeoQuery
    });

    const data = response[contentType].data?.attributes;
    return getSeoMetadata(data?.seo);
};
