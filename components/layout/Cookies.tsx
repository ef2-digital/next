'use client';

import Container from './Container';
import Row from './Row';
import Button from './Button';
import useCookies from 'hooks/useCookies';
import { Suspense } from 'react';

const Cookies = () => {
    const { consent, onAllow, onDecline } = useCookies();

    if (consent === true || consent === false) {
        return null;
    }

    return (
        <Suspense>
            <div className="fixed bottom-0 w-full">
                <Container>
                    <Row>
                        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center mb-4 col-span-full md:col-start-3 md:col-span-8 lg:col-span-6 lg:col-start-4 bg-blue-400 rounded-xl px-8 py-6">
                            <span className="flex-grow text-white">
                                ~ Naam ~ maakt gebruik van cookies om het de bezoeker nog makkelijker en persoonlijker te maken.
                            </span>
                            <div className="flex flex-none space-x-2">
                                <Button as="button" onClick={onAllow}>
                                    Accepteren
                                </Button>
                                <Button variant="secondary" as="button" onClick={onDecline}>
                                    Nee bedankt
                                </Button>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </Suspense>
    );
};

export default Cookies;
