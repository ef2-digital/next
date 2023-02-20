import gql from 'graphql-tag';

export const NAVIGATION_ITEM = gql`
    fragment NavigationItem on NavigationItem {
        id
        title
        path
        type
        externalPath
        related {
            attributes {
                __typename
            }
        }
        # bold
    }
`;

export const NAVIGATION = gql`
    ${NAVIGATION_ITEM}

    query Navigation($id: String!) {
        navigation: renderNavigation(navigationIdOrSlug: $id, menuOnly: false, type: TREE) {
            ...NavigationItem
            items {
                ...NavigationItem
            }
        }
    }
`;
