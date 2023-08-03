'use client';
import { COLOR_MAP, TARGET_MAP } from 'config';
import { ComponentInputButtonFragment } from 'graphql/types';
import { ButtonProps } from '@nextui-org/react';
import { useMemo } from 'react';
import Button from 'components/layout/Button';
import { getButtonProps } from 'utils/helpers';

interface StrapiButtonProps extends ComponentInputButtonFragment {
    className?: string;
}

const StrapiButton = ({ className, ...props }: StrapiButtonProps) => {
    return <Button className={className} {...getButtonProps(props)} />;
};

export default StrapiButton;
