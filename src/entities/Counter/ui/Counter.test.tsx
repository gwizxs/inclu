

import {  screen } from "@testing-library/react";
import { Counter } from "./Counter";
import { ComponentRender } from "shared/config/ComponentsRender/componentRender";
import { init } from "i18next";

describe("Counter", () => {
    test("with only first parameter", () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        })
        expect(screen.getByTestId("value-title")).toHaveTextContent("10");
    });

    test("increment", () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        })
        const incrementBtn = screen.getByTestId("increment-btn");
        expect(screen.getByTestId("value-title")).toHaveTextContent("10");
        incrementBtn.click();
        expect(screen.getByTestId("value-title")).toHaveTextContent("11");
    }
    );

    test("decrement", () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        })
        const decrementBtn = screen.getByTestId("decrement-btn");
        expect(screen.getByTestId("value-title")).toHaveTextContent("10");
        decrementBtn.click();
        expect(screen.getByTestId("value-title")).toHaveTextContent("9");
    }
    );
});

