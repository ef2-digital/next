'use client';

import { PropsWithChildren } from 'react';
import { classNamesTailwind } from 'utils/theme';

export interface BackgroundProps {
    className?: string;
}

const Background = ({ children, className }: PropsWithChildren<BackgroundProps>) => {
    return <div className={classNamesTailwind('bg-gray-50 py-20', className)}>{children}</div>;
};

export default Background;
