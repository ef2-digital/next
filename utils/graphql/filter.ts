import gql from 'graphql-tag';
import { capitalizeFirstLetter } from 'utils/helpers';
import { CollectionTypeQuery, GeneratedQuery } from './types';
import { getGeneratedQueryData } from './fetch';
import { notNull } from './helpers';

export type Filter = { title: string; id: string };
export type FilterQuery = CollectionTypeQuery<Omit<Filter, 'id'>>;

export const getFilterQuery = ({ contentType }: { contentType: string }) => {
    return gql`
        query Filter${capitalizeFirstLetter(contentType)}($locale: I18NLocaleCode) {
            ${contentType}(locale: $locale) {
                data {
                    id
                    attributes {
                        title
                    }
                }
            }
        }
    `;
};

export const getFilter = async ({ contentType }: GeneratedQuery): Promise<Filter[]> => {
    const response = await getGeneratedQueryData<FilterQuery>({
        contentType,
        tags: ['SingleTypePageQuery'],
        generateQuery: getFilterQuery
    });

    return (
        response[contentType].data?.filter(notNull).map((data) => ({
            id: data.id,
            ...data.attributes
        })) ?? []
    );
};
