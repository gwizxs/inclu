import { componentRender } from "@/shared/library/tests/componentRender/componentRender";
import { AppRouter } from "..";
import { getRouteAbout, getRouteAdmin, getRouteProfile } from "@/shared/const/router";
import { screen } from "@testing-library/react";
import { UserRole } from "@/entities/User";
describe('app/router/AppRouter', () => {
    test('should render', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('page not found', async () => {
        componentRender(<AppRouter />, {
            route: '/asdf',
        });

        const page = await screen.findByTestId('Page');
        expect(page).toBeInTheDocument();
        expect(page).toHaveClass('NotFoundPage');
    });

    test('redirect not authorized user to main page', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('access for authorized user', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    _inited: true,
                    authData: {},
                },
            },
        });

        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });

    test('access for admin', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _inited: true,
                    authData: {
                        roles: [UserRole.ADMIN],
                    },
                },
            },
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
