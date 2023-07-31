import { ComponentContentTextFragment } from 'graphql/types';
import Paragraph from 'components/layout/Paragraph';
import { getParagraphProps } from 'utils/helpers';
import { Component } from 'utils/graphql/types';
import { Container, Row } from 'components/layout';
import { classNamesTailwind } from 'utils/theme';
import Wrapper from 'components/layout/Wrapper';

const StrapiContentText = ({ fragment, className }: Component<ComponentContentTextFragment>) => {
    return (
        <Wrapper className={className} background={fragment.background}>
            <Container>
                <Row>
                    <div
                        className={classNamesTailwind('col-span-full md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3', {
                            'md:col-start-3 md:col-span-8 lg:col-span-6 lg:col-start-4': fragment.narrow
                        })}
                    >
                        <Paragraph {...getParagraphProps(fragment.paragraph)} />
                    </div>
                </Row>
            </Container>
        </Wrapper>
    );
};

export default StrapiContentText;
