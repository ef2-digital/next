import * as Accordion from '@radix-ui/react-accordion';
import { PropsWithChildren, forwardRef } from 'react';
import { classNamesTailwind } from 'utils/theme';

interface AccordionContentProps {
    className?: string;
}

const AccordionContent = forwardRef<HTMLDivElement, PropsWithChildren<AccordionContentProps>>(({ className, children }, ref) => {
    return (
        <Accordion.Content
            className={classNamesTailwind(
                'data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden',
                className
            )}
            ref={ref}
        >
            <div className="border-l border-l-black pl-4 md:pl-8 lg:pl-14 mb-4">{children}</div>
        </Accordion.Content>
    );
});

AccordionContent.displayName = 'AccordionContent';

export default AccordionContent;
