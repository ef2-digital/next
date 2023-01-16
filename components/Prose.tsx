import classNames from 'classnames';
import { Maybe } from 'graphql/types';
import { ElementType } from 'react';

export interface ProseProps {
    html?: Maybe<string>;
    tag?: ElementType;
    text?: string;
    className?: string;
}

const Prose = ({ tag: Tag = 'p', html, text, className }: ProseProps) => {
    if (!html && !text) {
        return null;
    }

    if (html) {
        return <div className={classNames('prose max-w-none', className)} dangerouslySetInnerHTML={{ __html: html }} />;
    }

    return <Tag className={className}>{text}</Tag>;
};

export default Prose;
