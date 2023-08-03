import ClientPage from './ClientPage';
import { use } from 'react';
import { getCollectionTeasers, getSingleTypePage } from 'utils/graphql/page';
import ClientOverviewWrapper from './ClientOverviewWrapper';
import ClientOverview from './ClientOverview';
import { getGeneralData } from './ServerPage';

interface ServerOverviewProps {
    contentType: string;
    contentTypeCollection: string;
    locale: string;
    slugPrefix?: string;
}

const ServerOverview = ({ locale, contentType, contentTypeCollection, slugPrefix }: ServerOverviewProps) => {
    const fallback = use(getCollectionTeasers({ contentType: contentTypeCollection }));
    const data = use(getSingleTypePage({ contentType, locale }));
    const general = use(getGeneralData(locale));

    return (
        <ClientPage data={data} general={general}>
            <ClientOverviewWrapper contentTypeCollection={contentTypeCollection} fallback={fallback}>
                <ClientOverview contentTypeCollection={contentTypeCollection} slugPrefix={slugPrefix} />
            </ClientOverviewWrapper>
        </ClientPage>
    );
};

export default ServerOverview;
