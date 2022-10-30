import classNames from 'classnames';
import { Icon } from '@ef2-digital/react';
import { PropsWithChildren } from 'react';
import { Disclosure } from '@headlessui/react';

export interface ContentAccordionProps {
    title: string;
    className?: string;
    html?: string;
}

const ContentAccordion = ({ className, title, children, html }: PropsWithChildren<ContentAccordionProps>) => {
    return (
        <Disclosure as="li" className={classNames('py-4 hover:bg-gray-50', className)}>
            <Disclosure.Button className="py-4 px-4 flex w-full justify-between">
                <span className="text-text">{title}</span>
                <Icon name="expandLess" className="transition-transform ui-open:rotate-180 ui-open:transform" />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4" dangerouslySetInnerHTML={html ? { __html: html } : undefined}>
                {children}
            </Disclosure.Panel>
        </Disclosure>
    );
};

export default ContentAccordion;
