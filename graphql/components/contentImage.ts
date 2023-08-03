import gql from 'graphql-tag';
import { COMPONENT_UPLOAD_FILE } from './uploadFile';

export const COMPONENT_CONTENT_IMAGE = gql`
    ${COMPONENT_UPLOAD_FILE}

    fragment ComponentContentImage on ComponentContentImage {
        image {
            data {
                attributes {
                    ...ComponentUploadFile
                }
            }
        }
        caption
        narrow
    }
`;
