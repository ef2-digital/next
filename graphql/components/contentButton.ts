import gql from 'graphql-tag';

export const COMPONENT_CONTENT_BUTTON = gql`
    fragment ComponentInputButton on ComponentInputButton {
        id
        label
        href
        color
        variant
        target
    }
`;
