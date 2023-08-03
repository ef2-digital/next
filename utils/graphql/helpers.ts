import { ContentTypeQueryDataAttributes } from './types';

export const getDataFromCollection = <T extends object>(data?: ContentTypeQueryDataAttributes<T>[]) => {
    const collection = data?.filter(notNull);
    return collection && Boolean(collection.length) ? collection[0].attributes : undefined;
};

export const notNull = <T extends object>(value: T | null | undefined): value is T => {
    return value !== null && value !== undefined;
};
