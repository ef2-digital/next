import { gql } from '@apollo/client';

export const COMPONENT_CONTENT_ACCORDION_ITEM = gql`
    fragment ComponentContentAccordionItem on ComponentContentAccordionItem {
        text
    }
`;
