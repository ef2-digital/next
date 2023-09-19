'use client';
import React, { ElementType } from 'react';
import { classNamesTailwind } from 'utils/theme';
import { BoldTitle } from '@ef2/content-components-react';

export interface HeadingProps {
    title?: string;
    titleHtml?: string | null;
    titleAs?: ElementType | null;
    subtitle?: string | null;
    className?: string;
    classNameTitle?: string;
    classNameSubtitle?: string;
}

const Heading = ({ titleAs = 'h2', className, classNameTitle, classNameSubtitle, title, titleHtml, subtitle }: HeadingProps) => {
    return (
        <div className={classNamesTailwind('mb-4 flex flex-col md:mb-6', className)}>
            <BoldTitle className={classNamesTailwind('', classNameTitle)} title={title} html={titleHtml} as={titleAs ?? undefined} />
            {subtitle && <p className={classNamesTailwind('', classNameSubtitle)}>{subtitle}</p>}
        </div>
    );
};

export default Heading;
