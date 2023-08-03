import ServerOverview from 'app/ServerOverview';
import { RootLayoutProps } from '../layout';
import { Metadata } from 'next';
import { getSingleTypeSeoMetadata } from 'utils/graphql/seo';

export const PAGE = 'articleOverviewPage';
export const PAGE_COLLECTION = 'articlePages';

export const generateMetadata = async ({ params: { locale } }: RootLayoutProps): Promise<Metadata> => {
    return getSingleTypeSeoMetadata({ contentType: PAGE, locale });
};

const Page = ({ params: { locale } }: RootLayoutProps) => {
    return <ServerOverview contentType={PAGE} contentTypeCollection={PAGE_COLLECTION} locale={locale} slugPrefix="actueel" />;
};

export default Page;
