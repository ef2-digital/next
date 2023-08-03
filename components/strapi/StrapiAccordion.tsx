'use client';

import Accordion from 'components/content/Accordion';
import Prose from 'components/layout/Prose';
import { ComponentContentAccordionFragment } from 'graphql/types';
import { notNull } from 'utils/graphql/helpers';
import { Component } from 'utils/graphql/types';
import { getHeadingProps } from 'utils/helpers';

const StrapiAccordion = ({ fragment, className }: Component<ComponentContentAccordionFragment>) => {
    return (
        <Accordion
            className={className}
            heading={getHeadingProps(fragment.heading)}
            items={fragment.items.filter(notNull).map((item) => ({
                children: <Prose html={item.text} />,
                title: item.title,
                value: item.id
            }))}
        />
    );
};

export default StrapiAccordion;
