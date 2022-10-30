import { NextPageWithLayout } from './_app';
import { DefaultLayout } from 'components/layout';
import { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import { SingleTypeHomepageQuery } from 'graphql/types';
import { SINGLE_TYPE_HOMEPAGE } from 'graphql/singleTypes/homepage';
import client from 'graphql/client';
import { StrapiContent } from 'components/strapi';
import { notNull } from 'utils/graphql';
import { ItemProps } from 'components/menu/Item';

const Home: NextPageWithLayout<SingleTypeHomepageQuery> = ({ homepage }) => {
    const data = homepage!.data!.attributes!;

    return (
        <>
            {data.content?.filter(notNull).map((zone, index) => (
                <StrapiContent key={index} data={zone} typename={zone.__typename} />
            ))}
        </>
    );
};

export const getStaticProps: GetStaticProps<SingleTypeHomepageQuery> = async () => {
    try {
        const { data } = await client.query<SingleTypeHomepageQuery>({ query: SINGLE_TYPE_HOMEPAGE });

        if (!data.homepage?.data?.attributes) {
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

Home.getLayout = (page: ReactElement, pageProps: SingleTypeHomepageQuery) => {
    const navigation: ItemProps[] = pageProps.navigation.filter(notNull).map((item) => ({ href: item.path!, children: item.title }));

    return <DefaultLayout navigation={navigation}>{page}</DefaultLayout>;
};

export default Home;
