import classNames from 'classnames';
// import Image from 'next/image';
import { useRouter } from 'next/router';
// import Woonboulevard from 'public/woonboulevard-veenendaal.webp';
import { forwardRef } from 'react';

interface LogoProps {
    className?: string;
    href?: string;
}

const Logo = forwardRef<HTMLAnchorElement, LogoProps>(({ className, href }, ref) => {
    const router = useRouter();

    return (
        <a
            href={href}
            ref={ref}
            className={classNames('block w-[8.5rem]', className)}
            aria-current={router.pathname == '/' ? 'page' : undefined}
        >
            {/* <Image src={Woonboulevard} alt="Logo Woonboulevard Veenendaal" layout="responsive" width={244} height={99} unoptimized /> */}
        </a>
    );
});

Logo.displayName = 'Logo';

export default Logo;
