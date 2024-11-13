import { classNames } from "shared/lib/ClassNames/classNames";

describe("classNames", () => {
    test("with only first parameter", () => {
        expect(classNames("cl").trim()).toBe("cl");
    });

    test("with additional classes", () => {
        const expected = 'cl class1 class2';
        expect(classNames("cl", {}, ['class1', 'class2']).trim()).toBe(expected);
    });

    test("with mods", () => {
        const expected = 'cl class1 class2 hovered,scrollable';
        expect(classNames("cl", { hovered: true, scrollable: true }, ['class1', 'class2']).trim()).toBe(expected);
    });

    test("with mods false", () => {
        const expected = 'cl class1 class2 hovered';
        expect(classNames("cl", { hovered: true, scrollable: false }, ['class1', 'class2']).trim()).toBe(expected);
    })

    test("with mods undefined", () => {
        const expected = 'cl class1 class2 hovered';
        expect(classNames("cl", { hovered: true, scrollable: undefined }, ['class1', 'class2']).trim()).toBe(expected);
    })
});

