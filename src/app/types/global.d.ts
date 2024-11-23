declare module '*.scss' {
    type IClassNames = Record<string, string>;
    const classnames: IClassNames;
    export = classnames;
}


declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.webp';
declare module '*.svg' {
    import React from 'react';
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean
declare const __API__: string