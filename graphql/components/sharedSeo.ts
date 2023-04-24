import gql from 'graphql-tag';
import { COMPONENT_UPLOAD_FILE } from './uploadFile';

export const COMPONENT_SHARED_SEO = gql`
    ${COMPONENT_UPLOAD_FILE}

    fragment ComponentSharedSeo on ComponentSharedSeo {
        id
        metaTitle
        metaRobots
        metaDescription
        metaViewport
        canonicalURL
        metaImage {
            data {
                attributes {
                    ...ComponentUploadFile
                }
            }
        }
        keywords
    }
`;
