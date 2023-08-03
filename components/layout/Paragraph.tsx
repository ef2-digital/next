import { Maybe } from 'graphql/types';
import Button, { ButtonProps } from './Button';
import Heading, { HeadingProps } from './Heading';
import Prose, { ProseProps } from './Prose';

export interface ParagraphProps {
    className?: string;
    heading?: Maybe<HeadingProps>;
    prose: ProseProps;
    button?: Maybe<ButtonProps>;
}

const Paragraph = ({ heading, button, className, prose }: ParagraphProps) => {
    return (
        <div className={className}>
            {heading && <Heading {...heading} />}
            <Prose {...prose} />
            {button && <Button className="mt-4" {...button} />}
        </div>
    );
};

export default Paragraph;
