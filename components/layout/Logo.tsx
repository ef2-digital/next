import Ef2 from '!@svgr/webpack!public/ef2.svg';
import { forwardRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { UploadFile } from 'graphql/types';
import { StrapiUploadFile } from '../strapi';

interface LogoProps {
    className?: string;
    href?: string;
    logo?: UploadFile;
}

const Logo = forwardRef<HTMLAnchorElement, LogoProps>(({ className, href, logo }, ref?) => {
    const pathname = usePathname();

    return (
        <Link href={href ?? '/'} ref={ref} aria-current={pathname == '/' ? 'page' : undefined} className={className}>
            {logo ? (
                <StrapiUploadFile {...logo} width={255} height={50} />
            ) : (
                <Ef2 className={classNames('fill-orange-500', className)} viewBox="0 0 30 33" width={40} height={44} />
            )}
            <span className="sr-only">Ga naar de homepagina</span>
        </Link>
    );
});

Logo.displayName = 'Logo';

export default Logo;
