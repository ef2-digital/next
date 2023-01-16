import { Button, ButtonProps } from '@ef2/react';
import { ComponentInputButtonFragment, Enum_Componentinputbutton_Target, Enum_Componentinputbutton_Type } from 'graphql/types';
import Link from 'next/link';

interface StrapiButtonProps extends ComponentInputButtonFragment {
    className?: string;
}

const colorMap = new Map<Enum_Componentinputbutton_Type, string>([
    [Enum_Componentinputbutton_Type.Default, 'primary'],
    [Enum_Componentinputbutton_Type.Secondary, 'secondary']
]);

export const getButtonProps = (component: ComponentInputButtonFragment): ButtonProps & { href: string } => {
    return {
        as: 'a',
        children: component.text,
        href: component.href,
        target: component.target === Enum_Componentinputbutton_Target.Blank ? '_blank' : '_self',
        color: colorMap.get(component.type) ?? undefined
    };
};

const StrapiButton = ({ href, className, ...props }: StrapiButtonProps) => {
    const button = getButtonProps({ href, ...props });

    return (
        <Link href={href} passHref legacyBehavior>
            <Button className={className} {...button} rel={button.target === '_blank' ? 'noreferrer' : undefined} />
        </Link>
    );
};

export default StrapiButton;
