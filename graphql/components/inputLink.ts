import gql from 'graphql-tag';

export const COMPONENT_INPUT_LINK = gql`
    fragment ComponentInputLink on ComponentInputLink {
        id
        label
        href
        target
    }
`;
