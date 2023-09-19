import { use } from 'react';
import { getSingleTypePage } from 'utils/graphql/page';
import ClientPage from './ClientPage';
import { fetchGraphql } from 'utils/graphql/fetch';
import { SingleTypeGeneralQuery } from 'graphql/types';
import { SINGLE_TYPE_GENERAL } from 'graphql/singleTypes/general';
import ServerPage from './ServerPage';

interface ServerPageSingleTypeProps {
    contentType: string;
    locale: string;
}

const ServerPageSingleType = ({ contentType, locale }: ServerPageSingleTypeProps) => {
    const data = use(getSingleTypePage({ contentType, locale }));

    return <ServerPage locale={locale} data={data} />;
};

export default ServerPageSingleType;
