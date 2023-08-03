import { PluginFunction, Types } from '@graphql-codegen/plugin-helpers';
import { DefinitionNode, FragmentDefinitionNode, GraphQLSchema, Kind, NameNode } from 'graphql';
import { DynamicZoneContent } from 'utils/graphql/types';

export interface GetFragmentHook<T extends object = {}> {
    fragment?: DynamicZoneContent<T>;
}

const getHook = (name: string) => {
    // prettier-ignore
    return (
`export const use${name}Values = (): GetFragmentHook<${name}Fragment> => {
   const fragment = useContentContext<${name}Fragment>('${name}');
   return { fragment };
}`
    );
};

const filterFragments = (value: DefinitionNode): value is FragmentDefinitionNode => {
    return value.kind === Kind.FRAGMENT_DEFINITION;
};

export const plugin: PluginFunction = (schema, documents) => {
    const node = documents.reduce<NameNode[]>((a, c) => {
        const fragments = c.document?.definitions.filter(filterFragments);
        return fragments ? [...a, ...fragments.map((definition) => definition.name)] : a;
    }, []);

    const hooks = node.map((node) => getHook(node.value));

    return [
        "import { GetFragmentHook } from 'plugins/test';",
        "import useContentContext, { DynamicZoneContent } from 'hooks/useContentContext';",
        ...hooks
    ].join('\n');
};
