import { Container, Row } from '@ef2/react';
import Prose from 'components/Prose';
import { BoldTitle } from 'components/text';
import { ComponentContentTextFragment } from 'graphql/types';
import StrapiButton from './StrapiButton';

export interface StrapiContentTextProps extends ComponentContentTextFragment {
    className?: string;
}

const StrapiContentText = ({ className, text, title, button }: StrapiContentTextProps) => {
    return (
        <Container className={className}>
            <Row>
                <div className="col-span-4 md:col-span-12 lg:col-span-8 lg:col-start-3">
                    <BoldTitle html={title} />
                    <Prose html={text} />
                    {button && <StrapiButton {...button} />}
                </div>
            </Row>
        </Container>
    );
};

export default StrapiContentText;
