import { ComponentUploadFileFragment, Maybe } from 'graphql/types';
import Image, { ImageProps } from 'next/image';
import DefaultTheme from 'tailwindcss/defaultTheme';
import { classNamesTailwind } from 'utils/theme';

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
            className={classNamesTailwind('w-full h-full', props.className)}
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`}
            placeholder={image.placeholder ? 'blur' : undefined}
            blurDataURL={image.placeholder ?? undefined}
            sizes={props.fill ? sizes ?? `(min-width: ${DefaultTheme.screens.md}) 30vw, 100vw` : undefined}
            alt={image.alternativeText ?? ''}
        />
    );
};

export default StrapiUploadFile;
