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
                <ul role="list" className="col-span-4 md:col-span-12 lg:col-span-8 lg:col-start-3 divide-y divide-gray-200">
                    {children}
                </ul>
            </Row>
        </Container>
    );
};

export default ContentAccordion;
