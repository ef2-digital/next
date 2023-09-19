'use client';

import classNames from 'classnames';
import { COMPONENT_MAP, COMPONENT_MARGIN, ComponentEnum } from 'config';

interface StrapiContentFlexProps<T> {
    data?: T | null;
    typename: ComponentEnum;
    className?: string;
}

const StrapiContentFlex = <T extends object>({ typename, data, className }: StrapiContentFlexProps<T>) => {
    const Content = COMPONENT_MAP.get(typename)?.component;

    if (!Content) {
        return null;
    }

    return <Content fragment={data} className={classNames(COMPONENT_MARGIN, className)} />;
};

export default StrapiContentFlex;
