import { NextPageWithLayout } from './_app';
import { DefaultLayout } from 'components/layout';
import { ReactElement } from 'react';
import { Button, Container, Row } from '@ef2-digital/react';

const Home: NextPageWithLayout = ({}) => {
    return (
        <>
            <Container>
                <Row>
                    <Button>123</Button>
                </Row>
            </Container>
        </>
    );
};

Home.getLayout = (page: ReactElement) => {
    return <DefaultLayout navigation={[]}>{page}</DefaultLayout>;
};

export default Home;
