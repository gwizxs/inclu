/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

type Mods = Record<string, boolean | string>

export function classNames(cl: string, mods: Mods = {}, additional: Array<string | undefined> = []): string {
    return [
        cl,
        ...additional.filter(Boolean),
        Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([cl]) => cl),
    ].join(' ')
}

