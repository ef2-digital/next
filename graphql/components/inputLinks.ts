import gql from 'graphql-tag';
import { COMPONENT_INPUT_LINK } from './inputLink';

export const COMPONENT_INPUT_LINKS = gql`
    ${COMPONENT_INPUT_LINK}

    fragment ComponentInputLinks on ComponentInputLinks {
        id
        title
        links {
            ...ComponentInputLink
        }
    }
`;
