import gql from 'graphql-tag';
import { COMPONENT_CONTENT_BUTTON } from './contentButton';
import { COMPONENT_CONTENT_HEADING } from './contentHeading';
import { COMPONENT_UPLOAD_FILE } from './uploadFile';

export const COMPONENT_CONTENT_TEASER = gql`
    ${COMPONENT_CONTENT_HEADING}
    ${COMPONENT_CONTENT_BUTTON}
    ${COMPONENT_UPLOAD_FILE}

    fragment ComponentContentTeaser on ComponentContentTeaser {
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
    }
`;
