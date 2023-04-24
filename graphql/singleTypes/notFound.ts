import gql from 'graphql-tag';

export const SINGLE_TYPE_NOT_FOUND = gql`
    query SingleTypeNotFound($locale: I18NLocaleCode!) {
        notFound(locale: $locale) {
            data {
                attributes {
                    title
                }
            }
        }
    }
`;
