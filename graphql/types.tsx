export type Maybe<T> = T | null;

export type SingleTypeHomepageQuery = { homepage?: { __typename?: 'HomepageEntityResponse', data?: { __typename?: 'HomepageEntity', id?: string | null, attributes?: { __typename?: 'Homepage', content?: Array<{ __typename: 'ComponentContentImageTexts' } | { __typename: 'Error' } | null> | null } | null } | null } | null };