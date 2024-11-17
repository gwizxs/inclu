import { render } from "@testing-library/react"
import { ReactNode } from "react"
import { I18nextProvider } from "react-i18next"
import { MemoryRouter } from "react-router-dom"
import i18nTest from "shared/config/i18n/i18nTest"

interface ComponentsRenderOptions {
    route?: string
}


export function ComponentRender(component: ReactNode, options: ComponentsRenderOptions = {}) {
    const {
        route = '/',
    } = options
    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nTest}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    )
}