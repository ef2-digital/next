import gql from 'graphql-tag';
import { COMPONENT_LAYOUT_PARAGRAPH } from './layoutParagraph';
import { COMPONENT_UPLOAD_FILE } from './uploadFile';

export const COMPONENT_CONTENT_IMAGE_TEXT = gql`
    ${COMPONENT_LAYOUT_PARAGRAPH}
    ${COMPONENT_UPLOAD_FILE}

    fragment ComponentContentImageText on ComponentContentImageText {
        id
        paragraph {
            ...ComponentLayoutParagraph
        }
        image {
            data {
                attributes {
                    ...ComponentUploadFile
                }
            }
        }
        textLeft
        background
    }
`;
