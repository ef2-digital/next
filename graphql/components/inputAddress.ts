import gql from 'graphql-tag';

export const COMPONENT_INPUT_ADDRESS = gql`
    fragment ComponentInputAddress on ComponentInputAddress {
        id
        street
        houseNumber
        houseNumberAddition
        postalCode
        place
        email
        phone
        phoneHref
    }
`;
