'use client';
import { ComponentInputButtonFragment } from 'graphql/types';
import Button from 'components/layout/Button';
import { getButtonProps } from 'utils/helpers';

interface StrapiButtonProps extends ComponentInputButtonFragment {
    className?: string;
}

const StrapiButton = ({ className, ...props }: StrapiButtonProps) => {
    return <Button className={className} {...getButtonProps(props)} />;
};

export default StrapiButton;
