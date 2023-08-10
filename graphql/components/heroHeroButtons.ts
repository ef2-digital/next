import gql from 'graphql-tag';
import { COMPONENT_INPUT_BUTTON } from './inputButton';
import { COMPONENT_HERO_HERO } from './heroHero';

export const COMPONENT_HERO_HERO_BUTTONS = gql`
    ${COMPONENT_HERO_HERO}
    ${COMPONENT_INPUT_BUTTON}

    fragment ComponentHeroHeroButtons on ComponentHeroHeroButtons {
        hero {
            ...ComponentHeroHero
        }
        buttons {
            ...ComponentInputButton
        }
    }
`;
