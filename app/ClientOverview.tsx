'use client';

import { Row } from '@ef2/react';
import { useSearchParams } from 'next/navigation';
import Container from 'components/layout/Container';
import useSWR, { unstable_serialize } from 'swr';
import { getCollectionTeasers } from 'utils/graphql/page';
import StrapiTeaser, { StrapiTeaserProps } from 'components/strapi/StrapiTeaser';
import { notNull } from 'utils/graphql/helpers';
import { PaginationFragment } from 'graphql/types';
import { StrapiPagination } from 'components/strapi';
import { Filter } from 'utils/graphql/filter';
import { useCallback, useMemo, useState } from 'react';
import { Filter as FilterGroup } from 'components/layout';
import { classNamesTailwind } from 'utils/theme';

export interface ClientOverviewProps<T extends { [key: string]: any }> {
    contentTypeCollection: string;
    filters?: { [key: string]: Filter[] };
    sort?: string[];
    attributes?: string[];
    slugPrefix?: string;
}

const ClientOverview = <T extends { [key: string]: any }>({ contentTypeCollection, filters, slugPrefix }: ClientOverviewProps<T>) => {
    // Search params
    const searchParams = useSearchParams();
    const page = searchParams.get('page');
    const [filterValues, setFilterValues] = useState(() =>
        filters ? Object.keys(filters).reduce<{ [key: string]: string[] }>((a, c) => ({ ...a, [c]: [] }), {}) : {}
    );

    // Render.
    const currentPage = page && !isNaN(page as unknown as number) ? parseInt(page) : 1;
    const filtersQuery = useMemo(
        () =>
            Object.entries(filterValues).reduce<string>((a, [key, value]) => {
                if (!Boolean(value.length)) {
                    return a;
                }

                const prefix = a ? `${a}, ` : a;

                return `${prefix}${key}: { id: { in: [${value.map((v) => `"${v}"`).join(',')}] } }`;
            }, ''),
        [filterValues]
    );

    const { data: teasers } = useSWR<{ teasers: StrapiTeaserProps[]; pagination?: PaginationFragment }>(
        unstable_serialize(['teasers', contentTypeCollection, filtersQuery, currentPage]),
        async () =>
            getCollectionTeasers({
                contentType: contentTypeCollection,
                filters: filtersQuery,
                variables: {
                    pagination: { page: currentPage, pageSize: 9 }
                }
            }),
        { suspense: true }
    );

    // Methods.
    const handleOnFilterChange = useCallback(
        (key: string, values: string[]) => setFilterValues({ ...filterValues, [key]: values }),
        [setFilterValues, filterValues]
    );

    return (
        <Container>
            <div className="grid md:grid-cols-3">
                {filters && (
                    <div className="flex flex-col">
                        {Object.entries(filters).map(([key, filters]) => (
                            <FilterGroup
                                key={key}
                                onValueChange={(values) => handleOnFilterChange(key, values)}
                                value={filterValues[key]}
                                filters={filters}
                            />
                        ))}
                    </div>
                )}
                <div className={classNamesTailwind('grid md:col-span-2 md:grid-cols-3 gap-4', { 'md:grid-cols-2': Boolean(filters) })}>
                    {teasers?.teasers.filter(notNull).map((teaser) => (
                        <StrapiTeaser key={teaser.fragment.id} {...teaser} slugPrefix={slugPrefix} />
                    ))}
                </div>
            </div>
            {teasers?.pagination && (
                <div className="mt-4 w-full flex flex-row items-center justify-center">
                    <StrapiPagination fragment={teasers.pagination} />
                </div>
            )}
        </Container>
    );
};

export default ClientOverview;
