
export function doSomethingWild(a: number, b: string, c: number[]): boolean {
    if (a < 10 && b === "wow") {
        return c.reduce((sum, n) => sum + n, 0) > a;
    }
    return false;
}