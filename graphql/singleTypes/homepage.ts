import { gql } from '@apollo/client';
import { COMPONENT_CONTENT_IMAGE_TEXTS } from 'graphql/components/contentImageTexts';

export const SINGLE_TYPE_HOMEPAGE = gql`
    ${COMPONENT_CONTENT_IMAGE_TEXTS}

    query SingleTypeHomepage {
        homepage {
            data {
                id
                attributes {
                    content {
                        __typename
                        ...ComponentContentImageTexts
                    }
                }
            }
        }
    }
`;
