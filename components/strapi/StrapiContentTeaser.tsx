import { ComponentContentTeaserFragment } from 'graphql/types';
import { Teaser, TeaserProps } from '@ef2/content-components-react';
import StrapiButton from './StrapiButton';
import { getHeadingProps } from 'utils/helpers';

export interface StrapiContentTeaserProps {
    teaser?: TeaserProps;
    fragment: ComponentContentTeaserFragment;
    className?: string;
}

const StrapiContentTeaser = ({ teaser, className, fragment }: StrapiContentTeaserProps) => {
    return (
        <Teaser
            className={className}
            {...teaser}
            description={fragment.text}
            heading={getHeadingProps(fragment.heading)}
            button={fragment.button ? <StrapiButton {...fragment.button} className="mt-8" /> : undefined}
        />
    );
};

export default StrapiContentTeaser;
