import { notNull } from 'utils/helpers';
import StrapiContentFlex from './StrapiContentFlex';

interface StrapiContentFlexComponentsProps {
    components?: ((object & { __typename: string }) | null)[] | null;
}

const StrapiContentFlexComponents = ({ components }: StrapiContentFlexComponentsProps) => {
    if (!components) {
        return null;
    }

    return (
        <>
            {components.filter(notNull).map((component) => (
                <StrapiContentFlex typename={component.__typename} data={component} key={component.__typename} />
            ))}
        </>
    );
};

export default StrapiContentFlexComponents;
