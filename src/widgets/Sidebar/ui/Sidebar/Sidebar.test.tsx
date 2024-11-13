import { render, screen } from "@testing-library/react";
import { Sidebar } from './Sidebar'
import { withTranslation } from "react-i18next";

describe("Sidebar", () => {
    test("with only first parameter", () => {
        const SideBarTr = withTranslation()(Sidebar)
        render(<SideBarTr/>);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        screen.debug();
    });

});

