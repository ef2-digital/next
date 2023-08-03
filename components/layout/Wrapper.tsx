import { PropsWithChildren } from 'react';
import Background from './Background';

export interface WrapperProps {
    className?: string;
    background?: boolean;
}

const Wrapper = ({ children, background, className }: PropsWithChildren<WrapperProps>) => {
    if (background) {
        return <Background className={className}>{children}</Background>;
    }

    return <div className={className}>{children}</div>;
};

export default Wrapper;
