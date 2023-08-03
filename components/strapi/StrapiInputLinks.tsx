import { ComponentContentTextFragment, ComponentInputLinksFragment } from 'graphql/types';
import Paragraph from 'components/layout/Paragraph';
import { getLinkProps, getParagraphProps } from 'utils/helpers';
import { Component } from 'utils/graphql/types';
import { Container, Row } from 'components/layout';
import { classNamesTailwind } from 'utils/theme';
import Wrapper from 'components/layout/Wrapper';
import Link from 'components/layout/Link';
import { notNull } from 'utils/graphql/helpers';

// TODO accessibility, tag
const StrapiInputLinks = ({ fragment, className }: Component<ComponentInputLinksFragment>) => {
    return (
        <div className={className}>
            <h3>{fragment.title}</h3>
            <ul>
                {fragment.links.filter(notNull).map((link) => (
                    <li key={link.id}>
                        <Link {...getLinkProps(link)} />
                    </li>
                ))} 
            </ul>
        </div>
    );
};

export default StrapiInputLinks;
