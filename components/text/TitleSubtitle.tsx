import classNames from 'classnames';
import { Maybe } from 'graphql/types';
import { ElementType } from 'react';

export interface TitleSubtitleProps {
    title?: Maybe<string>;
    subtitle?: Maybe<string>;
    titleAs?: ElementType;
    subtitleAs?: ElementType;
    titleClassName?: string;
    subtitleClassName?: string;
    className?: string;
    center?: boolean;
}

const TitleSubtitle = ({
    titleAs: Title = 'h3',
    subtitleAs: Subtitle = 'h4',
    title,
    subtitle,
    className,
    center,
    titleClassName,
    subtitleClassName
}: TitleSubtitleProps) => {
    // Render.
    return (
        <div className={classNames('flex flex-col', className)}>
            {title && <Title className={classNames('order-2', { 'text-center': center }, titleClassName)}>{title}</Title>}
            {subtitle && <Subtitle className={classNames('order-1', { 'text-center': center }, subtitleClassName)}>{subtitle}</Subtitle>}
        </div>
    );
};

export default TitleSubtitle;
