import { ComponentContentTeaserCollectionFragment, ComponentContentTextFragment } from 'graphql/types';
import { Teasers, TeasersProps } from '@ef2/content-components-react';
import { getHeadingProps, notNull } from 'utils/graphql';
import StrapiContentTeaser from './StrapiContentTeaser';
import StrapiButton from './StrapiButton';

export interface StrapiContentTeaserCollectionProps {
    teasers?: TeasersProps;
    fragment: ComponentContentTeaserCollectionFragment;
}

const StrapiContentTeaserCollection = ({ teasers, fragment }: StrapiContentTeaserCollectionProps) => {
    return (
        <Teasers
            heading={{ ...getHeadingProps(fragment.heading), ...(teasers ? teasers.heading : {}) }}
            teasers={fragment.teasers.filter(notNull).map((teaser) => ({
                description: teaser.text,
                heading: getHeadingProps(teaser.heading),
                button: teaser.button ? <StrapiButton {...teaser.button} className="mt-8" /> : undefined
            }))}
        />
    );
};

export default StrapiContentTeaserCollection;
