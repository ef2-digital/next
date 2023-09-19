import { StrapiContentImage, StrapiContentText, StrapiAccordion } from 'components/strapi';
import { DocumentNode } from 'graphql';
import { COMPONENT_CONTENT_ACCORDION } from 'graphql/components/contentAccordion';
import { COMPONENT_CONTENT_TEXT } from 'graphql/components/contentText';
import { FunctionComponent } from 'react';
import { COMPONENT_CONTENT_IMAGE_TEXT } from 'graphql/components/contentImageText';
import StrapiContentImageText from 'components/strapi/StrapiContentImageText';
import { Enum_Componentinputbutton_Target, Enum_Componentinputbutton_Variant } from 'graphql/types';
import { ButtonProps } from 'components/layout/Button';
import { COMPONENT_CONTENT_IMAGE } from 'graphql/components/contentImage';
import StrapiContentQuote from 'components/strapi/StrapiContentQuote';
import { COMPONENT_CONTENT_QUOTE } from 'graphql/components/contentQuote';
import StrapiHeroButtons from 'components/strapi/StrapiHeroButtons';
import { COMPONENT_HERO_HERO_BUTTONS } from 'graphql/components/heroHeroButtons';

/* ~ Internationalization (i18n) ~ */
export const LOCALES = process.env.NEXT_PUBLIC_LOCALES!.split(',');
export const DEFAULT_LOCALE = process.env.NEXT_PUBLIC_DEFAULT_LOCALE!;

/* ~ Flex compontents ~ */
export enum ComponentEnum {
    CONTENT_ACCORDION = 'ComponentContentAccordion',
    CONTENT_TEXT = 'ComponentContentText',
    CONTENT_IMAGE_TEXT = 'ComponentContentImageText',
    CONTENT_IMAGE = 'ComponentContentImage',
    CONTENT_QUOTE = 'ComponentContentQuote',
    HERO_HERO_BUTTONS = 'ComponentHeroHeroButtons'
}

export interface ComponentOptions {
    fragment: DocumentNode;
    component: FunctionComponent<any>;
    default?: boolean; // Possible for customer to show on every page.
    hero?: boolean; // Is component a hero component.
}

export const COMPONENT_MARGIN = 'mb-20 md:mb-28 xl:mb-36';
export const COMPONENT_MAP = new Map<ComponentEnum, ComponentOptions>([
    [
        ComponentEnum.CONTENT_ACCORDION,
        { fragment: COMPONENT_CONTENT_ACCORDION, component: (props) => <StrapiAccordion {...props} />, default: true }
    ],
    [
        ComponentEnum.CONTENT_TEXT,
        { fragment: COMPONENT_CONTENT_TEXT, component: (props) => <StrapiContentText {...props} />, default: true }
    ],
    [
        ComponentEnum.CONTENT_IMAGE,
        { fragment: COMPONENT_CONTENT_IMAGE, component: (props) => <StrapiContentImage {...props} />, default: true }
    ],
    [
        ComponentEnum.CONTENT_IMAGE_TEXT,
        { fragment: COMPONENT_CONTENT_IMAGE_TEXT, component: (props) => <StrapiContentImageText {...props} />, default: true }
    ],
    [
        ComponentEnum.CONTENT_QUOTE,
        { fragment: COMPONENT_CONTENT_QUOTE, component: (props) => <StrapiContentQuote {...props} />, default: true }
    ],
    [
        ComponentEnum.HERO_HERO_BUTTONS,
        { fragment: COMPONENT_HERO_HERO_BUTTONS, component: (props) => <StrapiHeroButtons {...props} />, default: true, hero: true }
    ]
]);

/* ~ Menu ~ */
// Whether it is a site with a mega menu.
export const MEGA_MENU: boolean = false;

// These paths are used to override the paths in the "Navigation UI" plugin.
// This is because you set the slug on the page and the page is displayed on it.
// The key needs to be the same as "__typename".
// When value is 'true', the slug attribute is used.
// When you add 'true' make sure that `graphql/components/navigation` has "... on XXXPage { slug }" for the content type.
export const NAVIGATION_PATHS = new Map<string, string | true>([
    ['ContactPage', '/contact'],
    ['ContentPage', true],
    ['Homepage', '/'],
    ['ArticleOverviewPage', '/actueel']
]);

/* ~ Sitemap ~ */
export const SITE_URL: string = 'https://example.com';

/* ~ Theme ~ */
export const COLOR_MAP = new Map<Enum_Componentinputbutton_Variant, ButtonProps['color']>([
    [Enum_Componentinputbutton_Variant.Primary, 'primary'],
    [Enum_Componentinputbutton_Variant.Secondary, 'secondary']
]);

export const TARGET_MAP = new Map<Enum_Componentinputbutton_Target, string>([
    [Enum_Componentinputbutton_Target.Blank, '_blank'],
    [Enum_Componentinputbutton_Target.Self, '_self']
]);
