'use client';

import { Pagination } from '@nextui-org/react';
import { PaginationFragment } from 'graphql/types';
import { Component } from 'utils/graphql/types';
import { classNamesTailwind } from 'utils/theme';

const StrapiPagination = ({ fragment, className }: Component<PaginationFragment>) => {
    return <Pagination className={classNamesTailwind('inline-flex', className)} page={fragment.page} total={fragment.pageCount} />;
};

export default StrapiPagination;
