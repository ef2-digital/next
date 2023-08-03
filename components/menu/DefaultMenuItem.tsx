import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, NavbarItem } from '@nextui-org/react';
import NavigationLink, { NavigationItem } from 'components/navigation/NavigationLink';
import { useState } from 'react';

interface DefaultMenuItemProps {
    item: NavigationItem;
}

const DefaultMenuItem = ({ item }: DefaultMenuItemProps) => {
    const items = !!item.items && Boolean(item.items.length);
    const [open, setOpen] = useState<boolean>(false);

    if (!items) {
        return (
            <NavbarItem>
                <NavigationLink {...item} />
            </NavbarItem>
        );
    }

    return (
        <Dropdown isOpen={open} onOpenChange={setOpen}>
            <NavbarItem>
                <DropdownTrigger>
                    <NavigationLink {...item} />
                </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu aria-label="Static Actions">
                {item.items!.map((item) => (
                    <DropdownItem key={item.id}>
                        <NavigationLink {...item} />
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};

export default DefaultMenuItem;
