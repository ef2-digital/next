import ClientPage from './ClientPage';
import { use } from 'react';
import { getCollectionTeasers, getSingleTypePage } from 'utils/graphql/page';
import ClientOverviewWrapper from './ClientOverviewWrapper';
import ClientOverview from './ClientOverview';
import { getGeneralData } from './ServerPage';
import { Filter, getFilter } from 'utils/graphql/filter';

interface ServerOverviewProps {
    contentType: string;
    contentTypeCollection: string;
    contentTypeFilters?: string[];
    locale: string;
    slugPrefix?: string;
}

const ServerOverview = ({ locale, contentType, contentTypeCollection, contentTypeFilters, slugPrefix }: ServerOverviewProps) => {
    const fallback = use(
        getCollectionTeasers({
            contentType: contentTypeCollection,
            // filters: `filterTypes: { id: { in: ["1"] } }`
        })
    );
    const data = use(getSingleTypePage({ contentType, locale }));
    const general = use(getGeneralData(locale));

    const filters = contentTypeFilters
        ? contentTypeFilters.reduce<{ [key: string]: Filter[] }>((a, c) => ({ ...a, [c]: use(getFilter({ contentType: c })) }), {})
        : undefined;
    // console.log(filters);

    return (
        <ClientPage data={data} general={general}>
            <ClientOverviewWrapper contentTypeCollection={contentTypeCollection} fallback={fallback}>
                <ClientOverview filters={filters} contentTypeCollection={contentTypeCollection} slugPrefix={slugPrefix} />
            </ClientOverviewWrapper>
        </ClientPage>
    );
};

export default ServerOverview;
