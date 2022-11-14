import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { Container } from '@ef2/react';
import Logo from './Logo';
import { Menu, MenuMobile, Toggle } from './menu';
import { ItemProps } from './menu/Item';

interface NavigationProps {
    items: ItemProps[];
}

interface HeaderProps extends NavigationProps {
    open: boolean;
    close: () => void;
}

const Header = ({ items, open, close }: HeaderProps) => {
    const router = useRouter();
    const toggleRef = useRef<HTMLButtonElement>(null);
    const lastItemRef = useRef<HTMLAnchorElement>(null);
    const firstItemRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        // Close menu when changing route.
        router.events.on('routeChangeStart', close);
        return () => router.events.off('routeChangeStart', close);
    }, [close, router.events]);

    return (
        <header>
            <nav aria-label="hoofdmenu" role="navigation">
                <div className="fixed top-0 z-[100] flex h-[5rem] w-full items-center bg-white shadow-sm md:h-[6rem]">
                    <Container>
                        <div className="flex items-center justify-between">
                            <Link href="/" passHref>
                                <Logo ref={firstItemRef} />
                            </Link>
                            <Menu items={items} />
                            <Toggle ref={toggleRef} open={open} />
                        </div>
                    </Container>
                </div>
                <MenuMobile
                    closeRef={toggleRef}
                    firstItemRef={firstItemRef}
                    lastItemRef={lastItemRef}
                    items={items}
                    open={open}
                    close={close}
                />
            </nav>
        </header>
    );
};

const Navigation = (props: NavigationProps) => {
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

export default Navigation;
