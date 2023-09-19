import { gql } from 'graphql-tag';
import { COMPONENT_GENERAL_FOOTER } from 'graphql/components/generalFooter';
import { COMPONENT_INPUT_REDIRECT } from 'graphql/components/inputRedirect';

export const SINGLE_TYPE_GENERAL = gql`
    ${COMPONENT_INPUT_REDIRECT}
    ${COMPONENT_GENERAL_FOOTER}

    query SingleTypeGeneral($locale: I18NLocaleCode!) {
        generalSetting(locale: $locale) {
            data {
                id
                attributes {
                    redirects {
                        ...ComponentInputRedirect
                    }
                    googleTagManager
                    footer {
                        ...ComponentGeneralFooter
                    }
                }
            }
        }
    }
`;
