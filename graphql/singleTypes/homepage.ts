import { gql } from 'graphql-tag';

export const SINGLE_TYPE_HOMEPAGE = gql`
    query SingleTypeHomepage($locale: I18NLocaleCode!) {
        homepage(locale: $locale) {
            data {
                id
            }
        }
    }
`;
