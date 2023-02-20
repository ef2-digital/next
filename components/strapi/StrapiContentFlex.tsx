import classNames from 'classnames';
import { FunctionComponent } from 'react';
import StrapiContentTeaserCollection, { StrapiContentTeaserCollectionProps } from './StrapiContentTeaserCollection';
import StrapiContentText, { StrapiContentTextProps } from './StrapiContentText';

const componentMap = new Map<string, FunctionComponent<any>>([
    ['ComponentContentText', (props: StrapiContentTextProps) => <StrapiContentText {...props} />],
    ['ComponentContentTeaserCollection', (props: StrapiContentTeaserCollectionProps) => <StrapiContentTeaserCollection {...props} />]
]);

interface StrapiContentFlexProps<T> {
    data?: T | null;
    typename: string;
    className?: string;
}

const StrapiContentFlex = <T extends object>({ typename, data, className }: StrapiContentFlexProps<T>) => {
    const Content = componentMap.get(typename);

    if (!Content) {
        return null;
    }

    return <Content fragment={data} className={classNames('mb-20 md:mb-28', className)} />;
};

export default StrapiContentFlex;
