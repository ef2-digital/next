import { HeadingProps, NavigationItem } from '@ef2/content-components-react';
import { ButtonProps, Variants } from 'components/layout/Button';
import { LinkProps } from 'components/layout/Link';
import { ParagraphProps } from 'components/layout/Paragraph';
import { TARGET_MAP, COLOR_MAP } from 'config';
import {
    ComponentContentHeadingFragment,
    ComponentInputButtonFragment,
    ComponentInputLinkFragment,
    ComponentLayoutParagraphFragment,
    Enum_Componentinputbutton_Target,
    Maybe
} from 'graphql/types';

export const getHeadingProps = (heading?: Maybe<ComponentContentHeadingFragment>): HeadingProps => {
    return {
        titleHtml: heading?.title,
        subtitle: heading?.subtitle
    };
};

export const getParagraphProps = (paragraph: ComponentLayoutParagraphFragment): ParagraphProps => {
    return {
        heading: paragraph.heading && getHeadingProps(paragraph.heading),
        prose: { html: paragraph.text },
        button: paragraph.button && getButtonProps(paragraph.button)
    };
};

export const getButtonProps = (component: ComponentInputButtonFragment): ButtonProps => {
    return {
        children: component.label,
        href: component.href,
        target: TARGET_MAP.get(component.target),
        color: COLOR_MAP.get(component.variant)
    };
};

export const getLinkProps = (component: ComponentInputLinkFragment): LinkProps => {
    return {
        children: component.label,
        href: component.href,
        target: TARGET_MAP.get(component.target as unknown as Enum_Componentinputbutton_Target)
    };
};

export const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
