import classNames from 'classnames';
import type { ButtonProps } from '@ef2-digital/react';
import { Row, Button } from '@ef2-digital/react';
import { TitleSubtitle } from 'components/text';
import { Maybe } from 'graphql/types';
import Link from 'next/link';
import { ReactNode } from 'react';

export interface ContentImageTextProps {
    odd?: boolean;
    className?: string;
    title: string;
    subtitle?: string;
    description: string;
    last?: boolean;
    href?: Maybe<string>;
    button?: ButtonProps;
    image?: ReactNode;
}

const ContentImageText = ({ className, odd, title, subtitle, description, href, button, image }: ContentImageTextProps) => {
    return (
        <article className={className}>
            <Row>
                <div
                    className={classNames('order-2 col-span-4 flex flex-col items-start md:col-span-6 lg:mt-16 xl:mt-24', {
                        'md:order-1': odd,
                        'md:order-2 md:col-start-7': !odd
                    })}
                >
                    <TitleSubtitle title={title} subtitle={subtitle} />
                    <p className="mb-6">{description}</p>
                    {button && href && (
                        <Link href={href} passHref>
                            <Button rel={button.target === '_blank' ? 'noreferrer' : undefined} {...button} className="order-4" />
                        </Link>
                    )}
                </div>
                <div
                    className={classNames('rounded overflow-hidden flex order-1 col-span-4 mb-8 h-auto w-full md:col-span-5 md:mb-0', {
                        'md:order-2 md:col-start-8': odd,
                        'md:order-1': !odd
                    })}
                >
                    {image}
                </div>
            </Row>
        </article>
    );
};

export default ContentImageText;
