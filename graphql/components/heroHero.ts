import gql from 'graphql-tag';
import { COMPONENT_UPLOAD_FILE } from './uploadFile';

export const COMPONENT_HERO_HERO = gql`
    ${COMPONENT_UPLOAD_FILE}
    
    fragment ComponentHeroHero on ComponentHeroHero {
        image {
            data {
                attributes {
                    ...ComponentUploadFile
                }
            }
        }
        title
    }
`;
