import { NextPageWithLayout } from './_app';
import { DefaultLayout } from 'components/layout';
import { ReactElement } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { CollectionPagePathsQuery, CollectionPageQuery, CollectionPageQueryVariables } from 'graphql/types';
import client from 'graphql/client';
import { StrapiContent } from 'components/strapi';
import { notNull } from 'utils/graphql';
import { COLLECTION_PAGE, COLLECTION_PAGE_PATHS } from 'graphql/collections/page';
import { ItemProps } from 'components/menu/Item';

export type PageUrlQuery = {
    pslug: string;
};

const Page: NextPageWithLayout<CollectionPageQuery> = ({ findSlug }) => {
    const data = findSlug!.data!.attributes!;

    return (
        <>
            {data.content?.filter(notNull).map((zone, index) => (
                <StrapiContent key={index} data={zone} typename={zone.__typename} />
            ))}
        </>
    );
};

export const getStaticProps: GetStaticProps<CollectionPageQuery, PageUrlQuery> = async (context) => {
    const slug = context.params!.pslug;

    try {
        const { data } = await client.query<CollectionPageQuery, CollectionPageQueryVariables>({
            query: COLLECTION_PAGE,
            variables: { slug }
        });

        console.log({ data });

        if (!data.findSlug?.data?.attributes) {
            return {
                notFound: true
            };
        }

        return {
            props: data,
            revalidate: 300
        };
    } catch (error) {
        return {
            notFound: true
        };
    }
};

export const getStaticPaths: GetStaticPaths<PageUrlQuery> = async () => {
    const { data } = await client.query<CollectionPagePathsQuery>({ query: COLLECTION_PAGE_PATHS });

    return {
        paths: data.pages!.data.map((page) => ({ params: { pslug: page.attributes!.slug } })),
        fallback: false
    };
};

Page.getLayout = (page: ReactElement, pageProps: CollectionPageQuery) => {
    const navigation: ItemProps[] = pageProps.navigation.filter(notNull).map((item) => ({ href: item.path!, children: item.title }));

    return <DefaultLayout navigation={navigation}>{page}</DefaultLayout>;
};

export default Page;
