import { Button, ButtonProps } from '@ef2/react';
import {
    ComponentContentButtonFragment,
    Enum_Componentcontentbutton_Target,
    Enum_Componentcontentbutton_Color,
    Enum_Componentcontentbutton_Variant
} from 'graphql/types';
import Link from 'next/link';

interface StrapiButtonProps extends ComponentContentButtonFragment {
    className?: string;
}

const colorMap = new Map<Enum_Componentcontentbutton_Color, string>([
    [Enum_Componentcontentbutton_Color.Primary, 'primary'],
    [Enum_Componentcontentbutton_Color.Secondary, 'secondary']
]);

const variantMap = new Map<Enum_Componentcontentbutton_Variant, string>([
    [Enum_Componentcontentbutton_Variant.Outline, 'outline'],
    [Enum_Componentcontentbutton_Variant.Text, 'text']
]);

const targetMap = new Map<Enum_Componentcontentbutton_Target, string>([
    [Enum_Componentcontentbutton_Target.Blank, '_blank'],
    [Enum_Componentcontentbutton_Target.Self, '_self']
]);

export const getButtonProps = (component: ComponentContentButtonFragment): ButtonProps & { href: string } => {
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
