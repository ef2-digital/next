import gql from 'graphql-tag';
import { COMPONENT_INPUT_BUTTON } from './inputButton';
import { COMPONENT_CONTENT_HEADING } from './contentHeading';

export const COMPONENT_LAYOUT_PARAGRAPH = gql`
    ${COMPONENT_INPUT_BUTTON}
    ${COMPONENT_CONTENT_HEADING}

    fragment ComponentLayoutParagraph on ComponentLayoutParagraph {
        id
        heading {
            ...ComponentContentHeading
        }
        text
        button {
            ...ComponentInputButton
        }
    }
`;
