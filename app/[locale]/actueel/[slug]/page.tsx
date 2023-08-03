import ServerPageCollectionType from 'app/ServerPageCollectionType';
import { Metadata } from 'next';
import { getSingleTypeSeoMetadata } from 'utils/graphql/seo';
import { getCollectionTypePaths } from 'utils/graphql/page';
import { RootLayoutProps } from 'app/[locale]/layout';

export const PAGE = 'articlePages';

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
