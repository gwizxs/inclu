
type Mods = Record<string, boolean | string>
const obg:Mods = {
    'hovered': false,
}

export function classNames(cl: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cl,
        ...additional.filter(Boolean),
        Object.entries(mods)
        .filter(([cl, value]) => Boolean(value))
        .map(([cl]) => cl),
    ].join(' ')
}

