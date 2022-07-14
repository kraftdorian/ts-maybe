import {Nothing} from "../src";

describe("Nothing", () => {
  test("valueOf returns Symbol", () => {
    const nothing = new Nothing();
    expect(typeof nothing.valueOf() === "symbol").toEqual(true);
  });
});
