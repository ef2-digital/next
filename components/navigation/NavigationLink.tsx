import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { forwardRef, PropsWithChildren } from 'react';
import { NavigationItem } from 'utils/graphql';

export interface NavigationLinkProps extends NavigationItem, Omit<LinkProps, 'href' | 'target' | 'rel'> {
    className?: string;
    activeClassName?: string;
}

const NavigationLink = forwardRef<HTMLAnchorElement, PropsWithChildren<NavigationLinkProps>>(
    ({ title, path, external, id, className, activeClassName, children, bold, ...props }, ref) => {
        const pathname = usePathname();
        const active = pathname === path;

        return (
            <Link
                ref={ref}
                {...props}
                href={path}
                className={classNames(className, { [`${activeClassName}`]: active })}
                target={external ? '_blank' : '_self'}
                rel={external ? 'noreferrer' : undefined}
            >
                {children}
                <span>{title}</span>
            </Link>
        );
    }
);

NavigationLink.displayName = 'NavigationLink';

export default NavigationLink;
