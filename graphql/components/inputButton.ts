import gql from 'graphql-tag';

export const COMPONENT_INPUT_BUTTON = gql`
    fragment ComponentInputButton on ComponentInputButton {
        id
        label
        href
        variant
        target
    }
`;
