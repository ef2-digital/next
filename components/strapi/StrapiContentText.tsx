import { ComponentContentTextFragment } from 'graphql/types';
import { Text, TextProps } from '@ef2/content-components-react';
import { ElementType } from 'react';
import StrapiButton from './StrapiButton';

export interface StrapiContentTextProps {
    text?: TextProps;
    fragment: ComponentContentTextFragment;
}

const StrapiContentText = ({ text, fragment }: StrapiContentTextProps) => {
    return (
        <Text
            {...text}
            html={fragment.text}
            titleHtml={fragment?.heading?.title}
            titleAs={fragment?.heading?.titleTag as ElementType}
            button={fragment.button ? <StrapiButton {...fragment.button} className="mt-8" /> : undefined}
        />
    );
};

export default StrapiContentText;
