import { DEFAULT_LOCALE, LOCALES } from 'config';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: LOCALES,
    defaultLocale: DEFAULT_LOCALE
});

export const config = {
    // Skip all paths that should not be internationalized
    matcher: ['/((?!api|_next|.*\\..*).*)']
};
