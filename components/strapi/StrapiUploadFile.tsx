import { ComponentUploadFileFragment } from 'graphql/types';
import Image, { ImageProps } from 'next/image';
import DefaultTheme from 'tailwindcss/defaultTheme';

export interface StrapiUploadFileProps extends ComponentUploadFileFragment, Omit<ImageProps, 'src' | 'placeholder'> {
    width?: number;
    height?: number;
    // TODO remove
    placeholder?: undefined;
}

const StrapiUploadFile = ({ url, sizes, placeholder, alternativeText, ...props }: StrapiUploadFileProps) => {
    return (
        <Image
            {...props}
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`}
            placeholder={placeholder ? 'blur' : undefined}
            blurDataURL={placeholder ?? undefined}
            sizes={
                props.layout === 'fill' || props.layout === 'responsive'
                    ? sizes ?? `(min-width: ${DefaultTheme.screens.md}) 30vw, 100vw`
                    : undefined
            }
            alt={alternativeText ?? ''}
        />
    );
};

export default StrapiUploadFile;
