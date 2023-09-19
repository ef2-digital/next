'use client';

import { Snippet } from '@nextui-org/react';
import { Container } from 'components/layout';
import { Error } from 'graphql/types';
import { useEffect, useMemo } from 'react';

const isJson = (string: string) => {
    try {
        JSON.parse(string);
    } catch (e) {
        return false;
    }

    return true;
};

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.log({ error });
    }, [error]);

    const message: { errors: Error[]; query?: string } | undefined | string = useMemo(
        () => (error.message && isJson(error.message) ? JSON.parse(error.message) : error.message),
        [error.message]
    );

    return (
        <div>
            <h2>Something went wrong!</h2>

            <Container>
                {typeof message === 'object' && message.query && (
                    <Snippet classNames={{ base: 'w-full' }}>
                        <span className="break-all">
                            <span className="whitespace-pre-wrap">{message.query}</span>
                        </span>
                    </Snippet>
                )}
            </Container>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    );
}
