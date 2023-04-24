import { gql } from 'graphql-tag';
import { COMPONENT_UPLOAD_FILE } from '../components/uploadFile';

export const SINGLE_TYPE_GENERAL = gql`
    ${COMPONENT_UPLOAD_FILE}

    query SingleTypeGeneral($locale: I18NLocaleCode!) {
        generalSetting(locale: $locale) {
            data {
                id
                attributes {
                    logo {
                        data {
                            id
                            attributes {
                                ...ComponentUploadFile
                            }
                        }
                    }
                    companyName
                    emailaddress
                    phoneNumber
                    address
                    socials {
                        id
                        channel
                        url
                    }
                }
            }
        }
    }
`;
