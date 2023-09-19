import gql from 'graphql-tag';
import { COMPONENT_LAYOUT_PARAGRAPH } from './layoutParagraph';

export const COMPONENT_CONTENT_TEXT = gql`
    ${COMPONENT_LAYOUT_PARAGRAPH}

    fragment ComponentContentText on ComponentContentText {
        id
        paragraph {
            ...ComponentLayoutParagraph
        }
        narrow
        background
    }
`;
