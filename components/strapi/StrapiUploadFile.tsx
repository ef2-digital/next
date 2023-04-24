import { ComponentUploadFileFragment } from 'graphql/types';
import Image, { ImageProps } from 'next/image';
import DefaultTheme from 'tailwindcss/defaultTheme';

export interface StrapiUploadFileProps extends ComponentUploadFileFragment, Omit<ImageProps, 'src' | 'alt' | 'placeholder'> {}

const StrapiUploadFile = ({ url, sizes, alternativeText, placeholder, ...props }: StrapiUploadFileProps) => {
    return (
        <Image
            {...props}
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`}
            placeholder={placeholder ? 'blur' : undefined}
            blurDataURL={placeholder ?? undefined}
            sizes={props.fill ? sizes ?? `(min-width: ${DefaultTheme.screens.md}) 30vw, 100vw` : undefined}
            alt={alternativeText ?? ''}
        />
    );
};

export default StrapiUploadFile;
