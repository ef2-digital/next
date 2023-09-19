import gql from 'graphql-tag';

export const COMPONENT_CONTENT_ACCORDION_ITEM = gql`
    fragment ComponentContentAccordionItem on ComponentContentAccordionItem {
        id
        title
        text
    }
`;
