import Link from 'next/link';
import { Container, Row } from '@ef2-digital/react';
import Ef2 from '!@svgr/webpack!public/ef2.svg';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="sticky top-[100vh]">
            <div className="bg-secondary">
                <Container className="py-12 md:py-16">
                    <Row>
                        <Link href="/" passHref>
                            <Logo className="col-span-4 mb-8 md:col-span-3 md:mb-0" />
                        </Link>
                        <div className="col-span-4 md:col-span-3 md:col-start-5">
                            <p className="!mb-0 font-bold text-white/50">EF2</p>
                            <p className="md:!mb-0 text-white/50">Ready to Renew</p>
                        </div>
                        <div className="col-span-4 md:col-span-3 md:col-start-8">
                            <p className="!mb-0 text-white/50">Vendelier 6b</p>
                            <p className="md:!mb-0 text-white/50">3905 PA Veenendaal</p>
                        </div>
                    </Row>
                </Container>
            </div>
            <div className="bg-primary">
                <Container>
                    <nav
                        role="navigation"
                        aria-label="Copyright"
                        className="py-4 font-montserrat text-[0.875rem] font-normal leading-6 text-white"
                    >
                        <ul className="flex items-center justify-between">
                            <li className="inline-flex list-none">
                                <Link href="/privacygegevens" passHref>
                                    <a className="hover:underline">
                                        Privacygegevens <span className="sr-only">(opent in een nieuw venster)</span>
                                    </a>
                                </Link>
                            </li>
                            <li className="inline-flex list-none">
                                <a
                                    className="inline-flex items-center hover:underline"
                                    href="https://ef2.nl/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Gebouwd door <span className="sr-only">EF2 (opent in een nieuw venster)</span>
                                    <Ef2 className="fill-white not-sr-only ml-3" viewBox="0 0 30 33" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
