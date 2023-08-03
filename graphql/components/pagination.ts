import gql from 'graphql-tag';

export const PAGINATION = gql`
    fragment Pagination on Pagination {
        total
        page
        pageSize
        pageCount
    }
`;
