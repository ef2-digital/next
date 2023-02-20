'use client';

import Logo from './Logo';
import Toggle from './Toggle';
import { Disclosure } from '@headlessui/react';
import { Header as HeaderComponent, HeaderProps as HeaderComponentProps } from '@ef2/content-components-react';
import { classNamesTailwind } from 'utils/theme';
import { ScrollHeader } from '@ef2/react';
import { NavigationLink } from './navigation';

interface HeaderProps extends Pick<HeaderComponentProps, 'navigation'> {}

const Header = ({ navigation }: HeaderProps) => {
    console.log({ navigation });

    return (
        <Disclosure>
            {({ open, close }) => (
                <ScrollHeader>
                    {({ top }) => {
                        return (
                            <HeaderComponent
                                open={open}
                                close={close}
                                renderLogo={(ref) => <Logo ref={ref} />}
                                navigation={navigation}
                                renderToggle={({ ref, open }) => <Toggle ref={ref} open={open} />}
                                renderMenuItem={({ ref, item }) => <NavigationLink {...item} ref={ref} />}
                                renderMobileMenuWrapper={(children) => (
                                    <Disclosure.Panel
                                        static
                                        className={classNamesTailwind(
                                            'md:hidden bg-white fixed right-0 top-0 z-10 w-full flex flex-col transition-[width] duration-500 ease-in-out motion-reduce:transition-none overflow-hidden h-screen',
                                            { 'w-screen': open, 'w-0': !open }
                                        )}
                                    >
                                        {children}
                                    </Disclosure.Panel>
                                )}
                            />
                        );
                    }}
                </ScrollHeader>
            )}
        </Disclosure>
    );
};

export default Header;
