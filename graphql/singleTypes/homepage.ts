import { gql } from 'graphql-tag';
import { COMPONENT_CONTENT_ACCORDION } from 'graphql/components/contentAccordion';
import { COMPONENT_CONTENT_IMAGE_TEXTS } from 'graphql/components/contentImageTexts';
import { COMPONENT_CONTENT_TEXT } from 'graphql/components/contentText';
import { COMPONENT_IMAGE } from 'graphql/components/contentImage';

export const SINGLE_TYPE_HOMEPAGE = gql`
    ${COMPONENT_IMAGE}
    ${COMPONENT_CONTENT_IMAGE_TEXTS}
    ${COMPONENT_CONTENT_ACCORDION}
    ${COMPONENT_CONTENT_TEXT}

    query SingleTypeHomepage {
        homepage {
            data {
                id
                attributes {
                    content {
                        __typename
                        ...ComponentContentImageTexts
                        ...ComponentContentAccordion
                        ...ComponentContentText
                        ...ComponentContentImage
                    }
                }
            }
        }
    }
`;
