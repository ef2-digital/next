import { NextPageWithLayout } from './_app';
import { DefaultLayout } from 'components/layout';
import { ReactElement } from 'react';
import { Button, Container } from '@ef2-digital/react';

const Home: NextPageWithLayout = ({}) => {
    return (
        <>
            <Container>
                <Button>Button</Button>
            </Container>
        </>
    );
};

Home.getLayout = (page: ReactElement) => {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
