import { classNames } from "./classNames";

describe("classNames", () => {
    test("with only first parameter", () => {
        expect(classNames("cl").trim()).toBe("cl");
    });
});
