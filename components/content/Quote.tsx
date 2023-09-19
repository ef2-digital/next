import { Container, ImageWrapper } from 'components/layout';
import Heading, { HeadingProps } from 'components/layout/Heading';
import { ReactNode } from 'react';
import { classNamesTailwind } from 'utils/theme';

interface QuoteProps {
    heading: HeadingProps;
    image?: ReactNode;
    className?: string;
}

const Quote = ({ heading, className, image }: QuoteProps) => {
    return (
        <Container className={classNamesTailwind('text-center', className)}>
            <blockquote className="aspect-[3/1] flex flex-col justify-center relative rounded overflow-hidden bg-background">
                <ImageWrapper className="absolute inset-0 bg-secondary">{image}</ImageWrapper>
                <Heading {...heading} className="relative mb-0 md:mb-0" classNameTitle="order-2" classNameSubtitle="order-1" titleAs="h2" />
            </blockquote>
        </Container>
    );
};

export default Quote;
