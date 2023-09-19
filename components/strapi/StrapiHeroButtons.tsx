'use client';
import { ComponentHeroHeroButtons } from 'graphql/types';
import { Component } from 'utils/graphql/types';
import Hero from 'components/content/Hero';
import StrapiUploadFile from './StrapiUploadFile';
import { notNull } from 'utils/graphql/helpers';
import StrapiButton from './StrapiButton';

const StrapiHeroButtons = ({ className, fragment }: Component<ComponentHeroHeroButtons>) => {
    return (
        <Hero
            className={className}
            image={<StrapiUploadFile className="opacity-30" image={fragment.hero.image.data?.attributes} width={1600} height={900} />}
            titleHtml={fragment.hero.title}
        >
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                {fragment.buttons.filter(notNull).map((button) => (
                    <StrapiButton key={button.id} {...button} />
                ))}
            </div>
        </Hero>
    );
};

export default StrapiHeroButtons;
