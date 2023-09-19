import React, { ElementType } from 'react';
import { classNamesTailwind } from 'utils/theme';

export interface ProseProps {
    html?: string | null;
    tag?: ElementType;
    text?: string;
    className?: string;
}

const Prose = ({ tag: Tag = 'p', html, text, className }: ProseProps) => {
    if (!html && !text) {
        return null;
    }

    if (html) {
        return (
            <div
                className={classNamesTailwind('prose max-w-none prose-headings:mb-6', className)}
                dangerouslySetInnerHTML={{ __html: html }}
            />
        );
    }

    return <Tag className={className}>{text}</Tag>;
};

Prose.displayName = 'Prose';

export default Prose;
