import webpack from "webpack";
import {BuildOptions} from "./types/config";
import { buildCssLoaders } from "./loaders/buildCssLoaders";
import {buildBabelLoader} from "./loaders/buildBabelLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const {isDev} = options
    const svgLoader = {
        test: /\.svg$/,
        use: [{
            loader: '@svgr/webpack',
            options: {
                icon: true,
                svgoConfig: {
                    plugins: [
                        {
                            name: 'convertColors',
                            params: {
                                currentColor: true,
                            }
                        }
                    ]
                }
            },
        }],
    }

    const babelLoader = buildBabelLoader({...options, isTsx: true})

    const cssLoader = buildCssLoaders(isDev)

    // Если не используем тайпскрипт - нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ]
}
