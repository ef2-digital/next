import { use } from 'react';
import { getCollectionTypePage } from 'utils/graphql/page';
import { fetchGraphql } from 'utils/graphql/fetch';
import { SingleTypeGeneralQuery } from 'graphql/types';
import { SINGLE_TYPE_GENERAL } from 'graphql/singleTypes/general';
import ServerPage from './ServerPage';

interface ServerPageCollectionTypeProps {
    contentType: string;
    locale: string;
    slug: string;
}

const ServerPageCollectionType = ({ contentType, slug, locale }: ServerPageCollectionTypeProps) => {
    const data = use(getCollectionTypePage({ slug, contentType, locale }));

    return <ServerPage locale={locale} data={data} />;
};

export default ServerPageCollectionType;
