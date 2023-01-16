import gql from 'graphql-tag';
import { COMPONENT_CONTENT_ACCORDION } from 'graphql/components/contentAccordion';
import { COMPONENT_CONTENT_IMAGE_TEXTS } from 'graphql/components/contentImageTexts';

export const COLLECTION_PAGE_RESPONSE = gql`
    ${COMPONENT_CONTENT_ACCORDION}
    ${COMPONENT_CONTENT_IMAGE_TEXTS}

    fragment CollectionPageResponse on PageEntityResponse {
        data {
            id
            attributes {
                content {
                    __typename
                    ...ComponentContentAccordion
                    ...ComponentContentImageTexts
                }
            }
        }
    }
`;

export const COLLECTION_PAGE = gql`
    ${COLLECTION_PAGE_RESPONSE}
    ${COMPONENT_CONTENT_ACCORDION}

    query CollectionPage($slug: String!) {
        findSlug(modelName: "page", slug: $slug) {
            ...CollectionPageResponse
        }
    }
`;

export const COLLECTION_PAGE_PATHS = gql`
    query CollectionPagePaths {
        pages {
            data {
                attributes {
                    slug
                }
            }
        }
    }
`;
