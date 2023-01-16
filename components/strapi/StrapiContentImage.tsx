import { Container, Row } from '@ef2/react';
import Prose from 'components/Prose';
import { BoldTitle } from 'components/text';
import { ComponentContentImageFragment } from 'graphql/types';
import StrapiButton from './StrapiButton';
import StrapiUploadFile from './StrapiUploadFile';

export interface StrapiContentImageProps extends ComponentContentImageFragment {
    className?: string;
}

const StrapiContentImage = ({ className, image }: StrapiContentImageProps) => {
    if (!image.data?.attributes) {
        return null;
    }

    return (
        <Container className={className}>
            <Row>
                <div className="col-span-4 md:col-span-12 lg:col-span-10 lg:col-start-2 relative aspect-video rounded-2xl overflow-hidden">
                    <StrapiUploadFile className='object-cover' {...image.data.attributes} fill />
                </div>
            </Row>
        </Container>
    );
};

export default StrapiContentImage;
