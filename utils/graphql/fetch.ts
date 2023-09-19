import { DocumentNode, print } from 'graphql';
import { GeneratedQuery, GraphqlError } from './types';

export const fetchGraphql = async <T extends object>(query: DocumentNode | string, tags: string[], variables?: object): Promise<T> => {
    const queryString = typeof query === 'string' ? query : print(query);
    const body = JSON.stringify({ query: queryString, variables });

    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        next: { tags, revalidate: 10 },
        body
    });

    const data: { data: T; errors?: GraphqlError[] } = await response.json();

    if (data.errors) {
        throw new Error(JSON.stringify({ errors: data.errors, query: queryString }));
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
