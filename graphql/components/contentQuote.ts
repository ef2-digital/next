import gql from 'graphql-tag';
import { COMPONENT_CONTENT_HEADING } from './contentHeading';
import { COMPONENT_UPLOAD_FILE } from './uploadFile';

export const COMPONENT_CONTENT_QUOTE = gql`
    ${COMPONENT_CONTENT_HEADING}
    ${COMPONENT_UPLOAD_FILE}

    fragment ComponentContentQuote on ComponentContentQuote {
        heading {
            ...ComponentContentHeading
        }
        image {
            data {
                attributes {
                    ...ComponentUploadFile
                }
            }
        }
    }
`;
