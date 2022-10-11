import { gql } from '@apollo/client';

export const COMPONENT_UPLOAD_FILE = gql`
    fragment ComponentUploadFile on UploadFile {
        alternativeText
        url
        # placeholder
    }
`;
