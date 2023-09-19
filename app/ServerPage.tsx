import { use } from 'react';
import ClientPage from './ClientPage';
import { fetchGraphql } from 'utils/graphql/fetch';
import { SingleTypeGeneralQuery } from 'graphql/types';
import { SINGLE_TYPE_GENERAL } from 'graphql/singleTypes/general';
import { SingleTypePage } from 'utils/graphql/types';

interface ServerPageProps<T extends SingleTypePage = SingleTypePage> {
    locale: string;
    data?: T;
}

export const getGeneralData = async (locale: string): Promise<SingleTypeGeneralQuery> => {
    return await fetchGraphql<SingleTypeGeneralQuery>(SINGLE_TYPE_GENERAL, ['SingleTypeGeneralQuery', locale], { locale });
};

const ServerPage = <T extends SingleTypePage = SingleTypePage>({ locale, data }: ServerPageProps<T>) => {
    const general = use(getGeneralData(locale));

    return <ClientPage general={general} data={data} />;
};

export default ServerPage;
