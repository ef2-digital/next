import createIntlMiddleware from 'next-intl/middleware';

export default createIntlMiddleware({
    locales: ['nl'],
    defaultLocale: 'nl'

    /** @description
     *  If you need domain bases translations, uncomment and fill in accordingly
     **/
    //domains: [
    //     {
    //         domain: 'localhost',
    //         defaultLocale: 'nl',
    //         locales: ['nl']
    //     }
    // ]
});

export const config = {
    matcher: ['/((?!api|_next|images|next/image|examples|[\\w-]+\\.\\w+).*)']
};
