import * as Accordion from '@radix-ui/react-accordion';
import { ExpandMoreIcon } from 'components/icon';
import { PropsWithChildren, forwardRef } from 'react';
import { classNamesTailwind } from 'utils/theme';

interface AccordionTriggerProps {
    className?: string;
}

const AccordionTrigger = forwardRef<HTMLButtonElement, PropsWithChildren<AccordionTriggerProps>>(({ className, children }, ref) => {
    return (
        <Accordion.Header asChild className="flex w-full h-16">
            <h3>
                <Accordion.Trigger className={classNamesTailwind('group flex w-full justify-between items-center', className)} ref={ref}>
                    <span className="text-black group-data-[state=open]:text-secondary transition-colors duration-300">{children}</span>
                    <span className="w-8 h-8 md:h-10 md:w-10 bg-secondary/20 rounded-full flex-none justify-center items-center inline-flex">
                        <ExpandMoreIcon className="w-6 h-6 fill-black group-data-[state=open]:fill-secondary group-data-[state=open]:rotate-180 transition-all duration-300" />
                    </span>
                </Accordion.Trigger>
            </h3>
        </Accordion.Header>
    );
});

AccordionTrigger.displayName = 'AccordionTrigger';

export default AccordionTrigger;
