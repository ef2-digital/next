import { ElementType } from 'react';

interface BoldTitleProps {
    title?: string;
    html?: string;
    as?: ElementType;
}

const BoldTitle = ({ as: Tag = 'h3', html, title }: BoldTitleProps) => {
    if (!html && !title) {
        return null;
    }

    return <Tag dangerouslySetInnerHTML={{ __html: html }}>{title}</Tag>;
};

export default BoldTitle;
