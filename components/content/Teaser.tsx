'use client';

import { Container, ImageWrapper } from 'components/layout';
import Heading, { HeadingProps } from 'components/layout/Heading';
import { ReactNode } from 'react';
import { classNamesTailwind } from 'utils/theme';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { Link } from 'next-intl';

interface TeaserProps {
    className?: string;
    image?: ReactNode;
    slug: string;
}

const Teaser = ({ className, slug, image }: TeaserProps) => {
    const router = useRouter();

    return (
        <Card onClick={() => router.push(slug)} className={classNamesTailwind('p-4', className)}>
            {/* TODO */}
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <Link href={slug}>sdf</Link>
                <h4 className="font-bold text-large">Frontend Radio</h4>
            </CardHeader>
            <CardBody className="spy-2">{image}</CardBody>
        </Card>
    );
};

export default Teaser;
