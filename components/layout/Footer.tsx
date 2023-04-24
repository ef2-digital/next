'use client';

import { GeneralSetting } from '../../graphql/types';
import Logo from './Logo';

const Footer = ({ companyName, address, emailaddress, phoneNumber, logo, socials }: GeneralSetting) => {
    return (
        <>
            <footer className="w-full fixed left-0 bottom-0 flex justify-center items-center">
                <Logo logo={logo?.data?.attributes!} />
                {companyName} {address} {emailaddress} {phoneNumber}
            </footer>
        </>
    );
};

export default Footer;
