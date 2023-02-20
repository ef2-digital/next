import { gql } from 'graphql-tag';
import { COMPONENT_CONTENT_TEASER_COLLECTION } from 'graphql/components/contentTeaserCollection';
import { COMPONENT_CONTENT_TEXT } from 'graphql/components/contentText';

export const SINGLE_TYPE_HOMEPAGE = gql`
    ${COMPONENT_CONTENT_TEXT}
    ${COMPONENT_CONTENT_TEASER_COLLECTION}

    query SingleTypeHomepage {
        contentHomepage {
            data {
                id
                attributes {
                    flexContent {
                        __typename
                        ...ComponentContentText
                        ...ComponentContentTeaserCollection
                    }
                }
            }
        }
    }
`;
