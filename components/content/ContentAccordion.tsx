import { Container } from '@ef2/react';
import { Row } from '@ef2/react';
import { PropsWithChildren } from 'react';

export interface ContentAccordionProps {
    className?: string;
}

const ContentAccordion = ({ className, children }: PropsWithChildren<ContentAccordionProps>) => {
    return (
        <Container className={className}>
            <Row>
                <ul className="col-span-8 col-start-3 divide-y divide-gray-200">{children}</ul>
            </Row>
        </Container>
    );
};

export default ContentAccordion;
