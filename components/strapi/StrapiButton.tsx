'use client';
import { Button } from '@ef2/react';
import { ButtonProps, Variants } from 'components/layout/Button';
import { ComponentInputButtonFragment, Enum_Componentinputbutton_Target, Enum_Componentinputbutton_Variant } from 'graphql/types';

interface StrapiButtonProps extends ComponentInputButtonFragment {
    className?: string;
}

const variantMap = new Map<Enum_Componentinputbutton_Variant, keyof Variants>([[Enum_Componentinputbutton_Variant.Primary, 'primary']]);

const targetMap = new Map<Enum_Componentinputbutton_Target, string>([
    [Enum_Componentinputbutton_Target.Blank, '_blank'],
    [Enum_Componentinputbutton_Target.Self, '_self']
]);

export const getButtonProps = (component: ComponentInputButtonFragment): ButtonProps => {
    return {
        children: component.label,
        href: component.href,
        target: targetMap.get(component.target),
        variant: variantMap.get(component.variant) as keyof Variants
    };
};

const StrapiButton = ({ className, ...props }: StrapiButtonProps) => {
    const button = getButtonProps(props);

    return <Button className={className} {...button} rel={button.target === '_blank' ? 'noreferrer' : undefined} />;
};

export default StrapiButton;
