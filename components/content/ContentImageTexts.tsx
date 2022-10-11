import classNames from 'classnames';
import { Container } from '@ef2-digital/react';
import { Enum_Componentcontentimagetexts_Direction, Maybe } from 'graphql/types';
import ContentImageText, { ContentImageTextProps } from './ContentImageText';

export interface ContentImageTextsProps {
    items: ContentImageTextProps[];
    className?: string;
    direction?: Maybe<Enum_Componentcontentimagetexts_Direction>;
}

const ContentImageTexts = ({ items, className, direction }: ContentImageTextsProps) => {
    return (
        <Container className={classNames(className)}>
            {items.map((item, index) => {
                const odd = index % 2 === 0;
                const last = index === items.length - 1;

                return (
                    <ContentImageText
                        className={classNames({ 'mb-16 md:mb-20': !last })}
                        key={item.title}
                        {...item}
                        last={last}
                        odd={direction === Enum_Componentcontentimagetexts_Direction.Odd ? odd : !odd}
                    />
                );
            })}
        </Container>
    );
};

export default ContentImageTexts;
