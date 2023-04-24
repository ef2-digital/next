import { SINGLE_TYPE_HOMEPAGE } from 'graphql/singleTypes/homepage';
import { SingleTypeHomepageQuery } from 'graphql/types';
import { fetchGraphql, getSingleTypeSeoMetadata } from 'utils/graphql';
import HomePage from './HomePage';
import { Metadata } from 'next';

const getData = async (locale: string): Promise<SingleTypeHomepageQuery> => {
    return await fetchGraphql<SingleTypeHomepageQuery>(SINGLE_TYPE_HOMEPAGE, { locale });
};

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> => {
    return getSingleTypeSeoMetadata('homepage', locale);
};

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
    return <></>;
    // retu÷rn <HomePage data={await getData(locale)} />;
}
