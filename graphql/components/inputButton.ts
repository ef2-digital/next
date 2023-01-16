import gql from 'graphql-tag';

export const COMPONENT_INPUT_BUTTON = gql`
    fragment ComponentInputButton on ComponentInputButton {
        id
        text
        href
        type
        target
    }
`;
