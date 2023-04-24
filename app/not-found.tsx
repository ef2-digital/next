import NotFoundPage from './NotFound';
import { SINGLE_TYPE_NOT_FOUND } from 'graphql/singleTypes/notFound';
import { SingleTypeNotFoundQuery } from 'graphql/types';
import { useLocale } from 'next-intl';
import { fetchGraphql } from 'utils/graphql';

export default async function NotFound() {
    const locale = useLocale();
    const { notFound } = await fetchGraphql<SingleTypeNotFoundQuery>(SINGLE_TYPE_NOT_FOUND, { locale });

    return <NotFoundPage {...notFound?.data?.attributes!} />;
}
