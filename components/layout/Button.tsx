'use client';

import { Button as ButtonNext, ButtonProps as ButtonNextProps } from '@nextui-org/react';
import { Link } from 'next-intl';
import { PropsWithChildren } from 'react';

export const variants: Variants = {
    primary: 'text-white bg-primary hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'text-white bg-secondary hover:bg-secondary-700 focus:ring-secondary-500'
};

export interface Variants {
    primary: string;
    secondary: string;
}

export type ButtonProps = ButtonNextProps;

const Button = ({ as = Link, children, ...props }: PropsWithChildren<ButtonProps>) => {
    return (
        <ButtonNext as={as} {...props}>
            {children}
        </ButtonNext>
    );
};

export default Button;
