import Container from 'components/layout/Container';
import Row from 'components/layout/Row';
import { classNamesTailwind } from 'utils/theme';
import Paragraph, { ParagraphProps } from 'components/layout/Paragraph';
import { ReactNode } from 'react';

interface ImageTextProps {
    className?: string;
    textLeft?: boolean;
    paragraph: ParagraphProps;
    image: ReactNode;
}

const ImageText = ({ className, image, paragraph, textLeft }: ImageTextProps) => {
    return (
        <Container className={className}>
            <Row>
                <div
                    className={classNamesTailwind(
                        'order-2 col-span-4 md:col-span-12 flex flex-col items-start lg:col-span-6 pt-12 sm:pt-16 lg:pt-0',
                        {
                            'lg:order-1': textLeft,
                            'lg:order-2 lg:col-start-7': !textLeft
                        }
                    )}
                >
                    <Paragraph {...paragraph} />
                </div>
                <div
                    className={classNamesTailwind(' flex order-1 col-span-4 md:col-span-12 mb-8 lg:col-span-5 lg:mb-0', {
                        'lg:order-2 lg:col-start-8': textLeft,
                        'lg:order-1': !textLeft
                    })}
                >
                    <div className="rounded relative overflow-hidden aspect-[4/3] w-full">{image}</div>
                </div>
            </Row>
        </Container>
    );
};

export default ImageText;
