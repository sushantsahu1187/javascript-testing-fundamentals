import { it, expect } from "vitest";
import { add } from "./app";

it("it should summarize all the numbers in an array", () => {
  const result = add([1, 2, 3, 4]);
  expect(result).toBe(10);
});
