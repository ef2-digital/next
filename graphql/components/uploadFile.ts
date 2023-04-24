import gql from 'graphql-tag';

export const COMPONENT_UPLOAD_FILE = gql`
    fragment ComponentUploadFile on UploadFile {
        alternativeText
        url
        placeholder
        hash
        mime
        name
        provider
        size
    }
`;
