'use client';

import useCookies from 'hooks/useCookies';
import Script from 'next/script';

interface GoogleTagManagerProps {
    googleTagManager?: string | null;
}

const GoogleTagManager = ({ googleTagManager }: GoogleTagManagerProps) => {
    const { consent } = useCookies();

    if (!(consent && googleTagManager)) {
        return null;
    }

    return (
        <Script id="google-tag-manager" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${googleTagManager}');`}
        </Script>
    );
};

export default GoogleTagManager;
