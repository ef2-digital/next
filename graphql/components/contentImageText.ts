import gql from 'graphql-tag';
import { COMPONENT_CONTENT_BUTTON } from './contentButton';
import { COMPONENT_CONTENT_HEADING } from './contentHeading';

export const COMPONENT_CONTENT_IMAGE_TEXT = gql`
    ${COMPONENT_CONTENT_HEADING}
    ${COMPONENT_CONTENT_BUTTON}

    fragment ComponentContentImageText on ComponentContentImageText {
        id
        image {
            data {
                id
                attributes {
                    ...ComponentUploadFile
                }
            }
        }
        heading {
            ...ComponentContentHeading
        }
        text
        button {
            ...ComponentInputButton
        }
        background
    }
`;
