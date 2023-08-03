'use client';

import { PropsWithChildren } from 'react';
import { classNamesTailwind } from 'utils/theme';

export interface ContainerProps {
    className?: string;
}

const Container = ({ children, className }: PropsWithChildren<ContainerProps>) => {
    return <div className={classNamesTailwind('px-4 container', className)}>{children}</div>;
};

export default Container;
