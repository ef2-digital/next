import { ContentAccordion, ContentAccordionItem } from 'components/content';
import { ComponentContentAccordionFragment } from 'graphql/types';
import { notNull } from 'utils/graphql';

export interface StrapiContentAccordionProps extends ComponentContentAccordionFragment {
    className?: string;
}

const StrapiContentAccordion = ({ className, items }: StrapiContentAccordionProps) => {
    return (
        <ContentAccordion className={className}>
            {items.filter(notNull).map((item) => (
                <ContentAccordionItem title={item.title} html={item.text} />
            ))}
        </ContentAccordion>
    );
};

export default StrapiContentAccordion;
