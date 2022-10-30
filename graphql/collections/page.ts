import { gql } from '@apollo/client';
import { COMPONENT_CONTENT_ACCORDION } from 'graphql/components/contentAccordion';
import { COMPONENT_CONTENT_IMAGE_TEXTS } from 'graphql/components/contentImageTexts';
import { COMPONENT_NAVIGATION } from 'graphql/components/navigation';

export const COLLECTION_PAGE = gql`
    ${COMPONENT_CONTENT_IMAGE_TEXTS}
    ${COMPONENT_CONTENT_ACCORDION}
    ${COMPONENT_NAVIGATION}

    query CollectionPage($slug: String!) {
        ...ComponentNavigation
        findSlug(modelName: "page", slug: $slug) {
            ... on PageEntityResponse {
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
