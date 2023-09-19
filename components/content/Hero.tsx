import { BoldTitle } from '@ef2/content-components-react';
import { Container, ImageWrapper } from 'components/layout';
import { PropsWithChildren, ReactNode } from 'react';
import { classNamesTailwind } from 'utils/theme';

interface HeroProps {
    title?: string;
    titleHtml?: string;
    className?: string;
    image?: ReactNode;
}

const Hero = ({ children, className, image, title, titleHtml }: PropsWithChildren<HeroProps>) => {
    return (
        <div className={classNamesTailwind('relative flex flex-col pt-8 md:pt-28 pb-4 md:pb-24', className)}>
            <ImageWrapper className="inset-0 absolute bg-secondary">{image}</ImageWrapper>
            <Container className="relative">
                {/* TODO extern? */}
                <BoldTitle className="md:mb-16 mb-8 text-white [&>b]:text-primary" title={title} html={titleHtml} as="h1" />
                {children}
            </Container>
        </div>
    );
};

export default Hero;
