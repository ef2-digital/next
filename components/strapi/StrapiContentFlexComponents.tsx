'use client';

import { notNull } from 'utils/helpers';
import StrapiContentFlex from './StrapiContentFlex';
import { ComponentEnum } from 'config';

interface StrapiContentFlexComponentsProps {
    components?: ((object & { __typename: string }) | null)[] | null;
}

const StrapiContentFlexComponents = ({ components }: StrapiContentFlexComponentsProps) => {
    if (!components) {
        return null;
    }

    return (
        <>
            {components.filter(notNull).map((component, index) => (
                <StrapiContentFlex typename={component.__typename as ComponentEnum} data={component} key={index} />
            ))}
        </>
    );
};

export default StrapiContentFlexComponents;
