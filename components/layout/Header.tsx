'use client';

import { NavigationItem } from 'components/navigation/NavigationLink';
import { MEGA_MENU } from 'config';
import { DefaultMenu } from 'components/menu';

interface HeaderProps {
    navigation: NavigationItem[];
}

const Header = ({ navigation }: HeaderProps) => {
    return <>{MEGA_MENU ? <>TODO</> : <DefaultMenu navigation={navigation} />}</>;
};

export default Header;
