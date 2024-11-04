import { ResolveOptions } from "webpack";

export function buildResolvers(): ResolveOptions {
    const resolvers = {
        extensions: ['.tsx', '.ts', '.js']
    };
    return resolvers;
}