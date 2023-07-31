import { gql } from 'graphql-tag';
import { COMPONENT_CONTENT_ACCORDION } from 'graphql/components/contentAccordion';

export const SINGLE_TYPE_HOMEPAGE = gql`
    ${COMPONENT_CONTENT_ACCORDION}

    query SingleTypeHomepage($locale: I18NLocaleCode!) {
        homepage(locale: $locale) {
            data {
                id
                attributes {
                    title
                    flexContent {
                        __typename
                        ...ComponentContentAccordion
                    }
                }
            }
        }
    }
`;
