import { classNamesTailwind } from 'utils/theme';
import ChevronLeft from '!@svgr/webpack!@material-symbols/svg-600/rounded/chevron_left.svg';

interface IconProps {
    name: IconEnum;
    viewBox?: string;
    className?: string;
}

export enum IconEnum {
    ChevronLeft = 'chevronLeft',
    ChevronRight = 'chevronRight'
}

const Icon = ({ name, viewBox, className }: IconProps) => {
    return <ChevronLeft className={classNamesTailwind('w-6 h-6 fill-primary', className)} viewBox={viewBox ?? '0 0 48 48'} />;
};

export default Icon;
