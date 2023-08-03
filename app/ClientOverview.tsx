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

export interface ClientOverviewProps<T extends { [key: string]: any }> {
    contentTypeCollection: string;
    sort?: string[];
    attributes?: string[];
    slugPrefix?: string;
}

const ClientOverview = <T extends { [key: string]: any }>({ contentTypeCollection, slugPrefix }: ClientOverviewProps<T>) => {
    // Search params
    const searchParams = useSearchParams();
    const page = searchParams.get('page');

    // Render.
    const currentPage = page && !isNaN(page as unknown as number) ? parseInt(page) : 1;

    const { data: teasers } = useSWR<{ teasers: StrapiTeaserProps[]; pagination?: PaginationFragment }>(
        unstable_serialize(['teasers', contentTypeCollection, currentPage]),
        async () =>
            getCollectionTeasers({
                contentType: contentTypeCollection,
                variables: {
                    pagination: { page: currentPage, pageSize: 9 }
                }
            }),
        { suspense: true }
    );

    return (
        <Container>
            <Row>
                {teasers?.teasers.filter(notNull).map((teaser) => (
                    <StrapiTeaser key={teaser.fragment.id} className="col-span-full md:col-span-4" {...teaser} slugPrefix={slugPrefix} />
                ))}
            </Row>
            {teasers?.pagination && (
                <div className="mt-4 w-full flex flex-row items-center justify-center">
                    <StrapiPagination fragment={teasers.pagination} />
                </div>
            )}
        </Container>
    );
};

export default ClientOverview;
