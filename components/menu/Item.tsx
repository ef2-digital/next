import Link from 'next/link';
import { forwardRef, PropsWithChildren } from 'react';
import { Button } from '@ef2/react';
import { Maybe } from 'graphql/types';
import classNames from 'classnames';

export interface ItemProps extends PropsWithChildren {
    href: string;
    target?: string;
    rel?: string;
    button?: Maybe<boolean>;
}

const Item = forwardRef<HTMLAnchorElement, ItemProps>(({ href, children, target, rel, button, ...props }, ref) => {
    if (button) {
        return (
            <li className="ml-5 inline-flex list-none">
                <Link legacyBehavior href={href} passHref>
                    <Button ref={ref} as="a" target={target} rel={rel}>
                        Route
                    </Button>
                </Link>
            </li>
        );
    }

    return (
        <li className="inline-flex list-none">
            <Link legacyBehavior href={href} passHref>
                <a
                    target={target}
                    rel={rel}
                    ref={ref}
                    {...props}
                    className={classNames(
                        'h4 w-full border-b border-b-tertiary py-6 md:rounded md:border-none md:py-3 md:px-5 md:hover:bg-tertiary-300 md:focus:bg-tertiary-300'
                    )}
                >
                    {children}
                </a>
            </Link>
        </li>
    );
});

Item.displayName = 'Item';

export default Item;
