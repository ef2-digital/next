'use client';

import { Disclosure } from '@headlessui/react';
import { useEffect, useRef } from 'react';
import { Container } from '@ef2/react';
import Logo from './Logo';
import { Menu, MenuMobile, Toggle } from './menu';
import { NavigationItem } from 'utils/graphql';
import { usePathname } from 'next/navigation';

interface HeaderWrapperProps {
    navigation: NavigationItem[];
}

interface HeaderProps extends HeaderWrapperProps {
    open: boolean;
    close: () => void;
}

const Header = ({ navigation, open, close }: HeaderProps) => {
    const pathname = usePathname();
    const toggleRef = useRef<HTMLButtonElement>(null);
    const lastItemRef = useRef<HTMLAnchorElement>(null);
    const firstItemRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        close();
    }, [close, pathname]);

    return (
        <header className="sticky top-0 z-50">
            <nav aria-label="primary navigation">
                <div className="w-full bg-white shadow-sm relative z-20">
                    <Container>
                        <div className="flex items-center justify-between h-[5rem]">
                            <Toggle ref={toggleRef} open={open} />
                            <Logo ref={firstItemRef} />
                            <Menu items={navigation} />
                        </div>
                    </Container>
                </div>
                <MenuMobile
                    closeRef={toggleRef}
                    firstItemRef={firstItemRef}
                    lastItemRef={lastItemRef}
                    items={navigation}
                    open={open}
                    close={close}
                />
            </nav>
        </header>
    );
};

const HeaderWrapper = (props: HeaderWrapperProps) => {
    // Render.
    return (
        <>
            <a className="p sr-only !mb-0 px-4 !leading-10 hover:underline focus:not-sr-only" href="#main">
                Overslaan en naar de inhoud gaan
            </a>
            <Disclosure>{({ open, close }) => <Header open={open} close={close} {...props} />}</Disclosure>
        </>
    );
};

export default HeaderWrapper;
