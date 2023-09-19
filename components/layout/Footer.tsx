'use client';

import { getLinkProps } from 'utils/helpers';
import { SingleTypeGeneralQuery } from '../../graphql/types';
import Container from './Container';
import Logo from './Logo';
import Link from './Link';
import { Copyright } from '@ef2/react';
import { notNull } from 'utils/graphql/helpers';
import { StrapiInputLinks } from 'components/strapi';
import Row from './Row';

interface FooterProps {
    general?: SingleTypeGeneralQuery;
}

const Footer = ({ general }: FooterProps) => {
    const footer = general?.generalSetting?.data?.attributes?.footer;

    if (!footer) {
        return null;
    }

    // Render.
    const { links } = footer;

    return (
        <footer className="">
            <Container className="mb-8">
                <Row>
                    <div className="col-span-3">
                        <Logo />
                    </div>
                    {footer.columns?.filter(notNull).map((column) => (
                        <StrapiInputLinks key={column.id} className="col-span-3" fragment={column} />
                    ))}
                </Row>
            </Container>
            <div className="bg-secondary/30 py-3">
                <Container>
                    <div className="flex items-center justify-between">
                        {links && (
                            <ul className="flex space-x-3">
                                {links.filter(notNull).map((link) => (
                                    <Link {...getLinkProps(link)} key={link.id} className="text-sm" />
                                ))}
                            </ul>
                        )}
                        <Copyright />
                    </div>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
