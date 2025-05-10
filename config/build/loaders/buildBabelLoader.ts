import { BuildOptions } from '../types/config';
import babelRemovePropsPlugin from '../../../config/babel/babelRemovePropsPlugin';

interface IBuildBabelLoaderProps extends BuildOptions {
    isTsx: boolean;
}

export function buildBabelLoader({ isDev, isTsx }: IBuildBabelLoaderProps) {
    const isProd = !isDev;
    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: ['@babel/preset-env'],
                plugins: [
                    //     [
                    //         'i18next-extract',
                    //         {
                    //             locales: ['en', 'ru'],
                    //             keyAsDefaultValue: false,
                    //             saveMissing: false,
                    //             discardOldKeys: true,
                    //             outputPath: 'public/locales/{{locale}}/{{ns}}.json',
                    //         },
                    //     ],
                    [
                        '@babel/plugin-transform-typescript',
                        {
                            isTsx,
                        },
                    ],
                    ['@babel/plugin-transform-runtime'],
                    isTsx &&
                        isProd && [
                            babelRemovePropsPlugin,
                            {
                                props: ['data-testid'],
                            },
                        ],
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
            },
        },
    };
}