'use client';

import { StrapiTeaserProps } from 'components/strapi/StrapiTeaser';
import { PaginationFragment } from 'graphql/types';
import { PropsWithChildren } from 'react';
import { SWRConfig, unstable_serialize } from 'swr';

interface ClientOverviewWrapperProps {
    fallback: { teasers: StrapiTeaserProps[]; pagination?: PaginationFragment };
    contentTypeCollection: string;
}

const ClientOverviewWrapper = ({ children, fallback, contentTypeCollection }: PropsWithChildren<ClientOverviewWrapperProps>) => {
    // Where '1' is the current page (caching):
    return <SWRConfig value={{ fallback: { [unstable_serialize(['teasers', contentTypeCollection, 1])]: fallback } }}>{children}</SWRConfig>;
};

export default ClientOverviewWrapper;
