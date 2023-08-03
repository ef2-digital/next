import { Root } from '@radix-ui/react-accordion';
import AccordionItem, { AccordionItemProps } from './AccordionItem';
import Heading, { HeadingProps } from 'components/layout/Heading';
import Container from 'components/layout/Container';
import Row from 'components/layout/Row';

interface AccordionProps {
    heading?: HeadingProps;
    items: AccordionItemProps[];
    className?: string;
}

const Accordion = ({ items, heading, className }: AccordionProps) => {
    return (
        <Container className={className}>
            <Row>
                <div className="col-span-full md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
                    <Heading {...heading} titleAs="h2" />
                    <Root type="single" collapsible>
                        {items.map((item) => (
                            <AccordionItem key={item.value} {...item} />
                        ))}
                    </Root>
                </div>
            </Row>
        </Container>
    );
};

export default Accordion;
