import { gql } from '@apollo/client';
import { COMPONENT_CONTENT_ACCORDION_ITEM } from './contentAccordionItem';

export const COMPONENT_CONTENT_ACCORDION = gql`
    ${COMPONENT_CONTENT_ACCORDION_ITEM}

    fragment ComponentContentAccordion on ComponentContentAccordion {
        items {
            ...ComponentContentAccordionItem
        }
    }
`;
