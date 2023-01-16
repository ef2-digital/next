import gql from 'graphql-tag';
import { COMPONENT_INPUT_BUTTON } from './inputButton';

export const COMPONENT_CONTENT_TEXT = gql`
    ${COMPONENT_INPUT_BUTTON}
    
    fragment ComponentContentText on ComponentContentText {
        title
        text
        button {
            ...ComponentInputButton
        }
    }
`;
