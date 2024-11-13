import { render, screen } from "@testing-library/react";
import Button, { ThemeButton } from "./Button";


describe("classNames", () => {
    test("with only first parameter", () => {
        render(<Button theme={ThemeButton.CLEAR}>test</Button>);
        expect(screen.getByText("test")).toHaveClass('clear');
        screen.debug();
    });

});

