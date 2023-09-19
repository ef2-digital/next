import * as Accordion from '@radix-ui/react-accordion';
import { ReactNode, forwardRef } from 'react';
import { classNamesTailwind } from 'utils/theme';
import AccordionContent from './AccordionContent';
import AccordionTrigger from './AccordionTrigger';

export interface AccordionItemProps {
    className?: string;
    value: string;
    title: string;
    children: ReactNode;
}

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(({ className, title, children, value }, ref) => {
    return (
        <Accordion.Item
            ref={ref}
            value={value}
            className={classNamesTailwind('border-b border-b-gray-300 overflow-hidden focus-within:relative focus-within:z-10', className)}
        >
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>{children}</AccordionContent>
        </Accordion.Item>
    );
});

AccordionItem.displayName = 'AccordionItem';

export default AccordionItem;
