import Teaser from 'components/content/Teaser';
import { ImageWrapper } from 'components/layout';
import { ComponentSharedTeaserFragment } from 'graphql/types';
import { Component } from 'utils/graphql/types';
import StrapiUploadFile from './StrapiUploadFile';

export type StrapiTeaserProps = Component<ComponentSharedTeaserFragment> & {
    slug: string;
    slugPrefix?: string;
};

const StrapiTeaser = ({ fragment, className, slug, slugPrefix }: StrapiTeaserProps) => {
    return (
        <Teaser
            slug={slugPrefix ? `/${slugPrefix}/${slug}` : `/${slug}`}
            className={className}
            image={
                <ImageWrapper className="aspect-[4/3] h-auto">
                    <StrapiUploadFile
                        image={fragment.image.data?.attributes}
                        className="w-full h-full object-center object-cover"
                        width={800}
                        height={600}
                    />
                </ImageWrapper>
            }
        />
    );
};

export default StrapiTeaser;
