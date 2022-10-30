import { gql } from '@apollo/client';

export const COMPONENT_NAVIGATION = gql`
    fragment ComponentNavigation on Query {
        navigation: renderNavigation(navigationIdOrSlug: "main-navigation", menuOnly: true) {
            title
            path
        }
    }
`;
