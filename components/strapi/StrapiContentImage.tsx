'use client';

import { ComponentContentImageFragment } from 'graphql/types';
import { Component } from 'utils/graphql/types';
import StrapiUploadFile from './StrapiUploadFile';
import Image from 'components/content/Image';

const StrapiImage = ({ fragment, className }: Component<ComponentContentImageFragment>) => {
    return (
        <Image
            className={className}
            narrow={fragment.narrow}
            caption={fragment.caption}
            image={
                <StrapiUploadFile
                    image={fragment.image.data?.attributes}
                    className="object-cover w-full h-full"
                    width={1600}
                    height={900}
                />
            }
        />
    );
};

export default StrapiImage;
