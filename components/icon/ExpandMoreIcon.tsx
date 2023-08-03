import ExpandMore from '!@svgr/webpack!@material-symbols/svg-600/rounded/expand_more.svg';
import { classNamesTailwind } from 'utils/theme';

interface ExpandMoreIcon {
    className?: string;
}

const ExpandMoreIcon = ({ className }: ExpandMoreIcon) => {
    return <ExpandMore className={classNamesTailwind('fill-current', className)} viewBox="0 0 48 48" />;
};

export default ExpandMoreIcon;
