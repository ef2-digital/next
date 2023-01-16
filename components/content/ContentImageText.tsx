import classNames from 'classnames';
import type { ButtonProps } from '@ef2/react';
import { Row, Button } from '@ef2/react';
import { TitleSubtitle } from 'components/text';
import { Maybe } from 'graphql/types';
import Link from 'next/link';
import { ReactNode } from 'react';
import StrapiProse from 'components/Prose';

export interface ContentImageTextProps {
    odd?: boolean;
    className?: string;
    title: string;
    subtitle?: string;
    html?: string;
    description?: string;
    last?: boolean;
    href?: Maybe<string>;
    button?: ButtonProps;
    image?: ReactNode;
}

const ContentImageText = ({ className, odd, title, subtitle, description, href, html, button, image }: ContentImageTextProps) => {
    return (
        <article className={className}>
            <Row>
                <div
                    className={classNames('order-2 col-span-4 md:col-span-12 flex flex-col items-start lg:col-span-6', {
                        'lg:order-1': odd,
                        'lg:order-2 lg:col-start-7': !odd
                    })}
                >
                    <div className="pt-12 sm:pt-16 lg:pt-0">
                        <h2>{title}</h2>
                        <StrapiProse html={html} text={description} />
                        {button && href && (
                            <Link href={href} passHref>
                                <Button rel={button.target === '_blank' ? 'noreferrer' : undefined} {...button} className="order-4" />
                            </Link>
                        )}
                    </div>
                </div>
                <div
                    className={classNames(
                        'rounded-2xl relative overflow-hidden flex order-1 col-span-4 md:col-span-12 mb-8 h-auto w-full lg:col-span-5 lg:mb-0',
                        {
                            'lg:order-2 lg:col-start-8': odd,
                            'lg:order-1': !odd
                        }
                    )}
                >
                    {image}
                </div>
            </Row>
        </article>
    );
};

export default ContentImageText;
