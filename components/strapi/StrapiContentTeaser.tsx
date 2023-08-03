import { ComponentContentTeaserFragment } from 'graphql/types';
import { Teaser, TeaserProps } from '@ef2/content-components-react';
import StrapiButton from './StrapiButton';
import { getHeadingProps } from 'utils/helpers';
import { Component } from 'utils/graphql/types';

export interface StrapiContentTeaserProps {
}

const StrapiContentTeaser = ({ teaser, className, fragment }: Component<StrapiContentTeaserProps>) => {
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
