'use client';

import { Maybe } from '@ef2/react';
import { StrapiContentFlexComponents } from 'components/strapi';
import { SingleTypeGeneralQuery } from 'graphql/types';
import { notFound } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { SingleTypePage } from 'utils/graphql/types';

export interface ClientPageProps<T extends SingleTypePage = SingleTypePage> {
    data?: T;
    general?: SingleTypeGeneralQuery;
}

const ClientPage = <T extends SingleTypePage = SingleTypePage>({ data, general, children }: PropsWithChildren<ClientPageProps<T>>) => {
    if (!data || !general) {
        return notFound();
    }

    console.log({ data, general})
    return (
        <>
            <StrapiContentFlexComponents components={data.hero} />
            {children}
            <StrapiContentFlexComponents components={data.flexContent} />
        </>
    );
};

export default ClientPage;