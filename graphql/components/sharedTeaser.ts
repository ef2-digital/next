import gql from 'graphql-tag';
import { COMPONENT_UPLOAD_FILE } from './uploadFile';

export const COMPONENT_SHARED_TEASER = gql`
    ${COMPONENT_UPLOAD_FILE}
    
    fragment ComponentSharedTeaser on ComponentSharedTeaser {
        id
        title
        description
        image {
            data {
                attributes {
                    ...ComponentUploadFile
                }
            }
        }
    }
`;
