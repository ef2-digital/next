import { NextPageWithLayout } from './_app';
import { DefaultLayout } from 'components/layout';
import { ReactElement } from 'react';
import { Button } from '@ef2-digital/react';

const Home: NextPageWithLayout = ({}) => {
    return (
        <>
            <Button>123</Button>
        </>
    );
};

Home.getLayout = (page: ReactElement) => {
    return (
        <DefaultLayout navigation={[]} hero>
            {page}
        </DefaultLayout>
    );
};

export default Home;
