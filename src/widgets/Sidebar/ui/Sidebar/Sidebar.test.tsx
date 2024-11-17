import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from './Sidebar'
import { ComponentRender } from "shared/config/ComponentsRender/componentRender";

describe("Sidebar", () => {
    test("with only first parameter", () => {
        ComponentRender(<Sidebar />)
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        screen.debug();
    });

    test("test toggle", () => {
        ComponentRender(<Sidebar />)
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass('collapsed');
    });

});

