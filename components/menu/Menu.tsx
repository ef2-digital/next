import classNames from 'classnames';
import NavigationLink from 'components/navigation/NavigationLink';
import { NavigationItem } from 'utils/graphql';

interface MenuProps {
    items: NavigationItem[];
}

const Menu = ({ items }: MenuProps) => {
    return (
        <nav className="hidden md:flex">
            <ul className='flex space-x-10'>
                {items.map((item, index) => {
                    // const last = index === items.length - 1;

                    return (
                        <li key={item.id}>
                            <NavigationLink
                                activeClassName="!text-gray-900"
                                className={classNames('text-base font-medium text-gray-500 hover:text-gray-900')}
                                {...item}
                            />
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Menu;
