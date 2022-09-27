import classNames from 'classnames';
import { useRouter } from 'next/router';
import { forwardRef } from 'react';
import Ef2 from '!@svgr/webpack!public/ef2.svg';

interface LogoProps {
    className?: string;
    href?: string;
}

const Logo = forwardRef<HTMLAnchorElement, LogoProps>(({ className, href }, ref) => {
    const router = useRouter();

    return (
        <a href={href} ref={ref} aria-current={router.pathname == '/' ? 'page' : undefined}>
            <Ef2 className={classNames('fill-white', className)} viewBox="0 0 30 33" width={40} height={44} />
        </a>
    );
});

Logo.displayName = 'Logo';

export default Logo;
