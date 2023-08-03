import { PropsWithChildren } from 'react';
import { classNamesTailwind } from 'utils/theme';

interface ImageWrapper {
    className?: string;
}

const ImageWrapper = ({ className, children }: PropsWithChildren<ImageWrapper>) => {
    return <div className={classNamesTailwind('relative overflow-hidden  w-full h-full', className)}>{children}</div>;
};

export default ImageWrapper;
