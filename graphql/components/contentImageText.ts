import { gql } from '@apollo/client';
import { COMPONENT_UPLOAD_FILE } from './uploadFile';

export const COMPONENT_CONTENT_IMAGE_TEXT = gql`
    ${COMPONENT_UPLOAD_FILE}

    fragment ComponentContentImageText on ComponentContentImageText {
        id
        title
        subtitle
        description
        href
        buttonText
        buttonTarget
        image {
            data {
                attributes {
                    ...ComponentUploadFile
                }
            }
        }
    }
`;
