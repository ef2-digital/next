import { Link, LinkIcon } from '@nextui-org/react';
import classNames from 'classnames';
import { ExpandMoreIcon } from 'components/icon';
import { Link as IntlLink } from 'next-intl';
import { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { forwardRef, PropsWithChildren, ReactNode, useMemo } from 'react';

export interface NavigationItem {
    id: number | string;
    title: string;
    path: string;
    external: boolean;
    bold?: boolean;
    items?: NavigationItem[];
}

export interface NavigationLinkProps extends NavigationItem, Omit<LinkProps, 'href' | 'target' | 'rel'> {
    className?: string;
    activeClassName?: string;
    onClick?: () => void;
    children?: ReactNode | (({ active, items }: { active?: boolean; items?: boolean }) => ReactNode);
    noLink?: boolean;
}

const NavigationLink = forwardRef<HTMLAnchorElement, PropsWithChildren<NavigationLinkProps>>(
    ({ title, noLink, path, external, id, className, activeClassName, items, children, bold, ...props }, ref) => {
        const pathname = usePathname();
        const active = useMemo(() => pathname === path, [pathname]);
        const hasItems = items && Boolean(items.length);

        return (
            <Link
                as={noLink ? 'span' : (IntlLink as any)}
                ref={ref}
                {...props}
                href={path}
                className={classNames(className, { [`${activeClassName}`]: active })}
                target={external ? '_blank' : '_self'}
                rel={external ? 'noreferrer' : undefined}
                showAnchorIcon={hasItems}
                anchorIcon={<ExpandMoreIcon className="w-6 h-6" />}
            >
                <span>{title}</span>
                {typeof children === 'function' ? children({ active, items: hasItems }) : children}
            </Link>
        );
    }
);

NavigationLink.displayName = 'NavigationLink';

export default NavigationLink;
