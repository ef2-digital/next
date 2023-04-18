import { Button, ButtonProps } from '@ef2/react';
import {
    ComponentInputButtonFragment,
    Enum_Componentinputbutton_Target,
    Enum_Componentinputbutton_Color,
    Enum_Componentinputbutton_Variant
} from 'graphql/types';
import Link from 'next/link';

interface StrapiButtonProps extends ComponentInputButtonFragment {
    className?: string;
}

const colorMap = new Map<Enum_Componentinputbutton_Color, string>([
    [Enum_Componentinputbutton_Color.Primary, 'primary'],
    [Enum_Componentinputbutton_Color.Secondary, 'secondary']
]);

const variantMap = new Map<Enum_Componentinputbutton_Variant, string>([
    [Enum_Componentinputbutton_Variant.Outline, 'outline'],
    [Enum_Componentinputbutton_Variant.Text, 'text']
]);

const targetMap = new Map<Enum_Componentinputbutton_Target, string>([
    [Enum_Componentinputbutton_Target.Blank, '_blank'],
    [Enum_Componentinputbutton_Target.Self, '_self']
]);

export const getButtonProps = (component: ComponentInputButtonFragment): ButtonProps & { href: string } => {
    return {
        as: 'a',
        children: component.label,
        href: component.href,
        target: targetMap.get(component.target),
        variant: variantMap.get(component.variant),
        color: colorMap.get(component.color)
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
