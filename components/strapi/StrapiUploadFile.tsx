import { ComponentUploadFileFragment, Maybe } from 'graphql/types';
import Image, { ImageProps } from 'next/image';
import DefaultTheme from 'tailwindcss/defaultTheme';

export interface StrapiUploadFileProps extends Omit<ImageProps, 'src' | 'alt' | 'placeholder'> {
    image?: Maybe<ComponentUploadFileFragment>;
}

const StrapiUploadFile = ({ sizes, image, ...props }: StrapiUploadFileProps) => {
    if (!image) {
        return null;
    }

    return (
        <Image
            {...props}
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`}
            placeholder={image.placeholder ? 'blur' : undefined}
            blurDataURL={image.placeholder ?? undefined}
            sizes={props.fill ? sizes ?? `(min-width: ${DefaultTheme.screens.md}) 30vw, 100vw` : undefined}
            alt={image.alternativeText ?? ''}
        />
    );
};

export default StrapiUploadFile;
