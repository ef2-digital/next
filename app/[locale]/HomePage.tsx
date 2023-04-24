import { SingleTypeHomepageQuery } from 'graphql/types';
import { notFound } from 'next/navigation';

interface HomePageProps {
    data: SingleTypeHomepageQuery;
}

const HomePage = ({ data: { homepage } }: HomePageProps) => {
    const data = homepage?.data?.attributes;

    if (!data) {
        return notFound();
    }

    return <></>;
};

export default HomePage;
