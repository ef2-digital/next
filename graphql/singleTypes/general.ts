import { gql } from 'graphql-tag';
import { COMPONENT_INPUT_REDIRECT } from 'graphql/components/inputRedirect';

export const SINGLE_TYPE_GENERAL = gql`
    ${COMPONENT_INPUT_REDIRECT}

    query SingleTypeGeneral($locale: I18NLocaleCode!) {
        generalSetting(locale: $locale) {
            data {
                id
                attributes {
                    redirects {
                        ...ComponentInputRedirect
                    }
                }
            }
        }
    }
`;
