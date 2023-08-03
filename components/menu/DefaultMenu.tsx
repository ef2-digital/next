import { NavigationItem } from 'components/navigation/NavigationLink';
import DefaultMenuItem from './DefaultMenuItem';
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, Input } from '@nextui-org/react';
import { useState } from 'react';
import { Logo } from 'components/layout';
import { ExpandMoreIcon } from 'components/icon';

interface DefaultMenuProps {
    navigation: NavigationItem[];
}

const DefaultMenu = ({ navigation }: DefaultMenuProps) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <Navbar onMenuOpenChange={(open) => setOpen(open ?? false)}>
            <NavbarContent>
                {/* // TODO translation */}
                <NavbarMenuToggle aria-label={open ? 'Close menu' : 'Open menu'} className="sm:hidden" />
                <NavbarBrand>
                    <Logo />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {navigation.map((item) => (
                    <DefaultMenuItem key={item.id} item={item} />
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                {/* // TODO translation */}
                <Input
                    classNames={{
                        base: 'max-w-full sm:max-w-[10rem] h-10',
                        input: 'text-small',
                        inputWrapper: 'font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20'
                    }}
                    placeholder="Type to search..."
                    startContent={<ExpandMoreIcon className="w-6 h-6" />}
                    type="search"
                    onSubmit={() => console.log('test')}
                />
            </NavbarContent>
            <NavbarMenu>
                {navigation.map((item) => (
                    <DefaultMenuItem key={item.id} item={item} />
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default DefaultMenu;
