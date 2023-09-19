import { PropsWithChildren } from 'react';
import { classNamesTailwind } from 'utils/theme';

export interface RowProps {
    className?: string;
}

const Row = ({ children, className }: PropsWithChildren<RowProps>) => {
    return <div className={classNamesTailwind('grid grid-cols-4 gap-x-4 auto-rows-auto md:grid-cols-12', className)}>{children}</div>;
};

export default Row;
