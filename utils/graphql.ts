import gql from 'graphql-tag';
import { NavigationItem } from '@ef2/content-components-react';
import { NAVIGATION } from 'graphql/components/navigation';
import { ComponentSharedSeoFragment, NavigationQuery } from 'graphql/types';
import { capitalizeFirstLetter, getNavigationItems } from './helpers';
import { fetchGraphql } from './graphql/fetch';
import { CollectionTypeQuery, SingleTypeQuery } from './graphql/types';

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

export type CollectionSeoQuery = CollectionTypeQuery<{ seo?: ComponentSharedSeoFragment }>;
export type SingleTypeSeoQuery = SingleTypeQuery<{ seo?: ComponentSharedSeoFragment }>;

export const getCollectionPaths = async (contentType: string, locale?: string): Promise<{ slug: string }[]> => {
    const response = await fetchGraphql<CollectionTypeQuery<{ slug: string }>>(getCollectionPathsQuery(contentType), { locale });
    const data = (response && response[contentType].data) ?? [];
    return data.map((path) => ({ slug: path.attributes.slug }));
};

export const fetchGraphqlNavigation = async (id: string, locale: string): Promise<NavigationItem[]> => {
    const navigation = await fetchGraphql<NavigationQuery>(NAVIGATION, { id, locale });
    return navigation ? getNavigationItems(navigation) : [];
};
