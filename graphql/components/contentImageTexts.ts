import gql from 'graphql-tag';
import { COMPONENT_CONTENT_IMAGE_TEXT } from './contentImageText';

export const COMPONENT_CONTENT_IMAGE_TEXTS = gql`
    ${COMPONENT_CONTENT_IMAGE_TEXT}

    fragment ComponentContentImageTexts on ComponentContentImageTexts {
        images {
            ...ComponentContentImageText
        }
        direction
    }
`;
