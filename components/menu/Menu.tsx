import Item, { ItemProps } from './Item';

interface MenuProps {
    items: ItemProps[];
}

const Menu = ({ items }: MenuProps) => {
    return (
        <div className="hidden md:flex">
            <ul>
                {items.map((item) => (
                    <Item key={item.children as string} {...item} />
                ))}
            </ul>
        </div>
    );
};

export default Menu;
