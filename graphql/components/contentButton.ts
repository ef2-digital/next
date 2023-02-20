import gql from 'graphql-tag';

export const COMPONENT_CONTENT_BUTTON = gql`
    fragment ComponentContentButton on ComponentContentButton {
        id
        label
        href
        color
        variant
        target
    }
`;
