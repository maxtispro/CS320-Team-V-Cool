import assert from "assert";

// ****************Example Code********************
describe("main", () => {
    it("works", () => {
        expect(parseInt("45")).toBe(45);
        assert(parseFloat("0.3333333333") - 1/3 < 1e-6)
    });
});
// ************************************************