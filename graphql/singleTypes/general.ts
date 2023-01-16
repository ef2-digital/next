import gql from 'graphql-tag';

export const SINGLE_TYPE_GENERAL = gql`
    query SingleTypeGeneral {
        general {
            data {
                id
                attributes {
                    address
                }
            }
        }
    }
`;
