import gql from 'graphql-tag';

export const NAVIGATION = gql`
    query Navigation($id: String!) {
        navigation: renderNavigation(navigationIdOrSlug: $id, menuOnly: true) {
            id
            title
            path
            externalPath
            bold
            related {
                attributes {
                    __typename
                    ... on Page {
                        slug
                    }
                }
            }
        }
    }
`;
