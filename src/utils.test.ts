import { tokenize } from "kuromojin";
import { expect, it } from "vitest";

import { isLastToken, findNextToken, findPreviousToken } from "./utils";

const tokens = await tokenize("肝心なところ洗い忘れてるよ");

it("isLastToken", () => {
  const lastToken = tokens[tokens.length - 1];
  expect(isLastToken(lastToken, tokens)).toBe(true);
});

it("findNextToken", () => {
  const lastToken = tokens[tokens.length - 1];
  expect(findNextToken(lastToken, tokens)).toBe(undefined);
});

it("findPreviousToken", () => {
  const lastToken = tokens[tokens.length - 1];
  expect(findPreviousToken(lastToken, tokens)).toBe(tokens[tokens.length - 2]);
});
