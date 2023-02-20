'use client';

import { StrapiContentFlex, StrapiContentFlexComponents } from 'components/strapi';
import { SingleTypeHomepageQuery } from 'graphql/types';
import { notFound } from 'next/navigation';
import { notNull } from 'utils/graphql';

interface HomePageProps {
    data: SingleTypeHomepageQuery;
}

const HomePage = ({ data: { contentHomepage } }: HomePageProps) => {
    const data = contentHomepage?.data?.attributes;

    if (!data) {
        return notFound();
    }

    return (
        <>
            <StrapiContentFlexComponents components={data.flexContent} />
        </>
    );
};

export default HomePage;
