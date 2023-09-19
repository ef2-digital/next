import gql from 'graphql-tag';
import { COMPONENT_INPUT_LINK } from './inputLink';
import { COMPONENT_INPUT_LINKS } from './inputLinks';

export const COMPONENT_GENERAL_FOOTER = gql`
    ${COMPONENT_INPUT_LINK}
    ${COMPONENT_INPUT_LINKS}

    fragment ComponentGeneralFooter on ComponentGeneralFooter {
        id
        socials {
            channel
        }
        links {
            ...ComponentInputLink
        }
        columns {
            ...ComponentInputLinks
        }
    }
`;
