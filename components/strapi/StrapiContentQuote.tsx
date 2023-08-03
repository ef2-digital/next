'use client';

import { ComponentContentQuoteFragment } from 'graphql/types';
import { Component } from 'utils/graphql/types';
import { Quote } from 'components/content';
import { getHeadingProps } from 'utils/helpers';
import StrapiUploadFile from './StrapiUploadFile';

const StrapiContentQuote = ({ fragment, className }: Component<ComponentContentQuoteFragment>) => {
    return (
        <Quote
            className={className}
            heading={getHeadingProps(fragment.heading)}
            image={<StrapiUploadFile className="opacity-40" image={fragment.image.data?.attributes} width={900} height={300} />}
        />
    );
};

export default StrapiContentQuote;
