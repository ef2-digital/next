import { Icon } from '@ef2/react';
import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { forwardRef, PropsWithChildren } from 'react';
import { NavigationItem } from '@ef2/content-components-react';
export interface NavigationLinkProps extends NavigationItem, Omit<LinkProps, 'href' | 'target' | 'rel'> {
    className?: string;
    activeClassName?: string;
    onClick?: () => void;
    items?: NavigationLinkProps[];
}

const NavigationLink = forwardRef<HTMLAnchorElement, PropsWithChildren<NavigationLinkProps>>(
    ({ title, path, external, id, className, activeClassName, items, children, bold, ...props }, ref) => {
        const pathname = usePathname();
        const active = pathname === path;

        if (!path && items && items.length > 0) {
            return (
                <span className={classNames(className, { [`${activeClassName}`]: active })}>
                    <span className="inline-flex items-center">
                        {title} <Icon className="ml-1 fill-current" name="expandMore" />
                    </span>
                    {children}
                </span>
            );
        }

        if (!path) {
            return null;
        }

        return (
            <Link
                ref={ref}
                {...props}
                href={path}
                className={classNames(className, { [`${activeClassName}`]: active })}
                target={external ? '_blank' : '_self'}
                rel={external ? 'noreferrer' : undefined}
            >
                <span>{title}</span>
                {children}
            </Link>
        );
    }
);

NavigationLink.displayName = 'NavigationLink';

export default NavigationLink;
