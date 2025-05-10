


export function getQueryParams(params: OptionalRecord<string, string>) {
    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) searchParams.set(key, value);
    })
    return `?${searchParams.toString()}`
}

/**
 * Функция добавления параметров в URL
 * @param params 
 */

export function addQueryParams(params: OptionalRecord<string, string>) {
    window.history.pushState(null, '', getQueryParams(params));
}