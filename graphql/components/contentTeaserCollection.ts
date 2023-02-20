import gql from 'graphql-tag';
import { COMPONENT_CONTENT_HEADING } from './contentHeading';
import { COMPONENT_CONTENT_TEASER } from './contentTeaser';

export const COMPONENT_CONTENT_TEASER_COLLECTION = gql`
    ${COMPONENT_CONTENT_HEADING}
    ${COMPONENT_CONTENT_TEASER}

    fragment ComponentContentTeaserCollection on ComponentContentTeaserCollection {
        id
        heading {
            ...ComponentContentHeading
        }
        teasers {
            ...ComponentContentTeaser
        }
    }
`;
