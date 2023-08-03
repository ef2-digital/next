import { Link as IntlLink } from 'next-intl';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType, PropsWithChildren } from 'react';
import { classNamesTailwind } from 'utils/theme';

type Attributes = AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement>;

export interface LinkProps extends Omit<Attributes, 'href'> {
    as?: ElementType;
    href?: string | null;
    className?: string;
}

const Link = ({ as, className, children, ...props }: PropsWithChildren<LinkProps>) => {
    const Tag: ElementType = as ?? props.href ? IntlLink : 'span';

    return (
        <Tag className={classNamesTailwind('inline-flex', { 'hover:underline': !!props.href }, className)} {...props}>
            {children}
        </Tag>
    );
};

export default Link;
