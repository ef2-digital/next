import { ContentImageTexts } from 'components/content';
import { ComponentContentImageTextsFragment, Enum_Componentcontentimagetext_Buttontarget } from 'graphql/types';
import { notNull } from 'utils/graphql';
import StrapiUploadFile from './StrapiUploadFile';

export interface StrapiContentImageTextsProps extends ComponentContentImageTextsFragment {
    className?: string;
}

const StrapiContentImageTexts = ({ direction, images, className }: StrapiContentImageTextsProps) => {
    return (
        <ContentImageTexts
            direction={direction}
            items={images.filter(notNull).map((item) => ({
                title: item.title,
                subtitle: item.subtitle,
                description: item.description,
                href: item.href,
                ...(item.buttonText && {
                    button: {
                        children: item.buttonText,
                        target: item.buttonTarget === Enum_Componentcontentimagetext_Buttontarget.Blank ? '_blank' : undefined
                    }
                }),
                image: item.image.data?.attributes ? (
                    <StrapiUploadFile
                        width={900}
                        height={600}
                        layout="intrinsic"
                        objectFit="cover"
                        objectPosition="center"
                        {...item.image.data.attributes}
                    />
                ) : undefined
            }))}
            className={className}
        />
    );
};

export default StrapiContentImageTexts;
