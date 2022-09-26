import { NextPageWithLayout } from './_app';
import { DefaultLayout } from 'components/layout';
import { ReactElement } from 'react';

const Home: NextPageWithLayout = ({}) => {
    return <>123</>;
};

Home.getLayout = (page: ReactElement) => {
    return (
        <DefaultLayout navigation={[]} hero>
            {page}
        </DefaultLayout>
    );
};

export default Home;
