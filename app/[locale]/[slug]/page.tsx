import ServerPageCollectionType from 'app/ServerPageCollectionType';
import { Metadata } from 'next';
import { getSingleTypeSeoMetadata } from 'utils/graphql/seo';
import { RootLayoutProps } from '../layout';
import { getCollectionTypePaths } from 'utils/graphql/page';

export const PAGE = 'contentPages';

export const generateStaticParams = async ({ params: { locale } }: RootLayoutProps) => {
    return getCollectionTypePaths({ contentType: PAGE, locale });
};

// TODO seo
// export const generateMetadata = async ({ params: { locale } }: RootLayoutProps): Promise<Metadata> => {
//     return getSingleTypeSeoMetadata({ contentType: PAGE, locale });
// };

const Page = ({ params: { locale, slug } }: { params: { locale: string; slug: string } }) => {
    return <ServerPageCollectionType contentType={PAGE} locale={locale} slug={slug} />;
};

export default Page;
