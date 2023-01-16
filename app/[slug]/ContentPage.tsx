'use client';

import { StrapiContent } from 'components/strapi';
import { CollectionPageQuery, CollectionPageResponseFragment } from 'graphql/types';
import { notFound } from 'next/navigation';
import { notNull } from 'utils/graphql';

interface ContentPageProps {
    data: CollectionPageQuery;
}

export default function ContentPage({ data: { findSlug } }: ContentPageProps) {
    const data = (findSlug as CollectionPageResponseFragment)?.data?.attributes;

    if (!data) {
        return notFound();
    }

    return (
        <>
            {data.content?.filter(notNull).map((zone, index) => (
                <StrapiContent key={index} data={zone} typename={zone.__typename} />
            ))}
        </>
    );
}
