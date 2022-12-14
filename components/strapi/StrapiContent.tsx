import classNames from 'classnames';
import { Maybe } from 'graphql/types';
import { FunctionComponent } from 'react';
import StrapiContentAccordion, { StrapiContentAccordionProps } from './StrapiContentAccordion';
import StrapiContentImageTexts, { StrapiContentImageTextsProps } from './StrapiContentImageTexts';

const componentMap = new Map<string, FunctionComponent<any>>([
    ['ComponentContentImageTexts', (props: StrapiContentImageTextsProps) => <StrapiContentImageTexts {...props} />],
    ['ComponentContentAccordion', (props: StrapiContentAccordionProps) => <StrapiContentAccordion {...props} />]
]);

interface StrapiContentProps<T> {
    data?: Maybe<T>;
    typename: string;
    className?: string;
}

const StrapiContent = <T extends object>({ typename, data, className }: StrapiContentProps<T>) => {
    const Content = componentMap.get(typename);

    if (!Content) {
        return null;
    }

    return <Content {...data} className={classNames('mb-20 md:mb-28', className)} />;
};

export default StrapiContent;
