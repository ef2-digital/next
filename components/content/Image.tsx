import Container from 'components/layout/Container';
import Row from 'components/layout/Row';
import { ReactNode } from 'react';
import { classNamesTailwind } from 'utils/theme';

interface ImageProps {
    className?: string;
    image: ReactNode;
    narrow?: boolean;
    caption?: string;
}

const Image = ({ className, image, narrow, caption }: ImageProps) => {
    return (
        <Container className={className}>
            <Row>
                <figure
                    className={classNamesTailwind('col-span-full', {
                        'md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3': narrow
                    })}
                >
                    <div className="aspect-video relative overflow-hidden rounded">{image}</div>
                    {caption && <figcaption className="mt-2">{caption}</figcaption>}
                </figure>
            </Row>
        </Container>
    );
};

export default Image;
