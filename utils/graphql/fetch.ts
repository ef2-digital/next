import { DocumentNode, print } from 'graphql';
import { GeneratedQuery } from './types';

export const fetchGraphql = async <T extends object>(query: DocumentNode | string, tags: string[], variables?: object): Promise<T> => {
    const body = typeof query === 'string' ? JSON.stringify({ query, variables }) : JSON.stringify({ query: print(query), variables });

    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        next: { tags, revalidate: 10 },
        body
    });

    const data: { data: T; errors?: { message: 'string' }[] } = await response.json();

    if (data.errors) {
        throw new Error(data.errors[0].message);
    }

    return data.data;
};

export const getGeneratedQueryData = async <T extends object>({
    contentType,
    generateQuery,
    locale,
    variables,
    tags
}: {
    generateQuery: (data: GeneratedQuery) => DocumentNode;
    tags: string[];
    variables?: object;
} & GeneratedQuery): Promise<T> => {
    const response = await fetchGraphql<T>(
        generateQuery({ contentType, locale }),
        [contentType, ...tags, ...(locale ? [locale] : [])],
        locale ? { locale, ...variables } : variables
    );

    return response;
};
