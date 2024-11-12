import { classNames } from "./classNames"

describe("classNames", () => {
    test("with only first param", () => {
        expect(classNames("SomeClass")).toBe("SomeClass")
    })
})