import gql from 'graphql-tag';

export const COMPONENT_CONTENT_HEADING = gql`
    fragment ComponentContentHeading on ComponentLayoutHeading {
        id
        title
        subtitle
    }
`;
