import { SINGLE_TYPE_HOMEPAGE } from 'graphql/singleTypes/homepage';
import { SingleTypeHomepageQuery } from 'graphql/types';
import { fetchGraphql } from 'utils/graphql';
import HomePage from './HomePage';

const getData = async (): Promise<SingleTypeHomepageQuery> => {
    return await fetchGraphql<SingleTypeHomepageQuery>(SINGLE_TYPE_HOMEPAGE);
};

export default async function Page({ params: { locale }}: {params: { locale: string }}) {
    return <HomePage data={await fetchGraphql<SingleTypeHomepageQuery>(SINGLE_TYPE_HOMEPAGE, {locale})} />;
}