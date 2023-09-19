'use client';

import { ComponentContentImageTextFragment } from 'graphql/types';
import { getParagraphProps } from 'utils/helpers';
import { Component } from 'utils/graphql/types';
import { ImageText } from 'components/content';
import StrapiUploadFile from './StrapiUploadFile';

const StrapiContentImageText = ({ fragment, className }: Component<ComponentContentImageTextFragment>) => {
    return (
        <ImageText
            image={
                <StrapiUploadFile image={fragment.image.data?.attributes} className="object-cover w-full h-full" width={800} height={600} />
            }
            className={className}
            paragraph={getParagraphProps(fragment.paragraph)}
            textLeft={fragment.textLeft}
        />
    );
};

export default StrapiContentImageText;
