import { COLLECTION_PAGE, COLLECTION_PAGE_PATHS } from 'graphql/collections/page';
import { CollectionPagePathsQuery, CollectionPageQuery } from 'graphql/types';
import { fetchGraphql, notNull } from 'utils/graphql';
import ContentPage from './ContentPage';

export const generateStaticParams = async (): Promise<{ slug: string }[]> => {
    const paths = await fetchGraphql<CollectionPagePathsQuery>(COLLECTION_PAGE_PATHS);

    if (!paths.pages?.data) {
        return [];
    }

    return paths.pages.data
        .filter(notNull)
        .filter((path) => path.attributes?.slug)
        .map((path) => ({ slug: path.attributes!.slug! }));
};

const getData = async (slug: string): Promise<CollectionPageQuery> => {
    return await fetchGraphql<CollectionPageQuery>(COLLECTION_PAGE, { slug });
};

interface PageProps {
    params: { slug: string };
}

const Page = async ({ params: { slug } }: PageProps) => {
    return <ContentPage data={await getData(slug)} />;
};

export default Page;
