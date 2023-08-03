import ServerPageSingleType from 'app/ServerPageSingleType';
import { Metadata } from 'next';
import { getSingleTypeSeoMetadata } from 'utils/graphql/seo';
import { RootLayoutProps } from '../layout';

export const PAGE = 'contactPage';

export const generateMetadata = async ({ params: { locale } }: RootLayoutProps): Promise<Metadata> => {
    return getSingleTypeSeoMetadata({ contentType: PAGE, locale });
};

const Page = ({ params: { locale } }: { params: { locale: string } }) => {
    return <ServerPageSingleType contentType={PAGE} locale={locale} />;
};

export default Page;
