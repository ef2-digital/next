'use client';

import { StrapiContent } from 'components/strapi';
import { SingleTypeHomepageQuery } from 'graphql/types';
import { notFound } from 'next/navigation';
import { notNull } from 'utils/graphql';

interface HomePageProps {
    data: SingleTypeHomepageQuery;
}

const HomePage = ({ data: { homepage } }: HomePageProps) => {
    const data = homepage?.data?.attributes;

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
};

export default HomePage;
