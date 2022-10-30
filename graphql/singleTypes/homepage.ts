import { gql } from '@apollo/client';
import { COMPONENT_CONTENT_ACCORDION } from 'graphql/components/contentAccordion';
import { COMPONENT_CONTENT_IMAGE_TEXTS } from 'graphql/components/contentImageTexts';
import { COMPONENT_NAVIGATION } from 'graphql/components/navigation';

export const SINGLE_TYPE_HOMEPAGE = gql`
    ${COMPONENT_CONTENT_IMAGE_TEXTS}
    ${COMPONENT_CONTENT_ACCORDION}
    ${COMPONENT_NAVIGATION}

    query SingleTypeHomepage {
        ...ComponentNavigation
        homepage {
            data {
                id
                attributes {
                    content {
                        __typename
                        ...ComponentContentImageTexts
                        ...ComponentContentAccordion
                    }
                }
            }
        }
    }
`;
