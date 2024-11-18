import { render } from "@testing-library/react"
import { StoreProvider } from "app/providers/StoreProvider"
import { ReactNode } from "react"
import { I18nextProvider } from "react-i18next"
import { MemoryRouter } from "react-router-dom"
import i18nTest from "shared/config/i18n/i18nTest"

interface ComponentsRenderOptions {
    route?: string,
    initialState?: Record<string, unknown>
}


export function ComponentRender(component: ReactNode, options: ComponentsRenderOptions = {}) {
    const {
        route = '/',
        initialState
    } = options

    
    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nTest}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
}