import type { KuromojiToken } from "kuromojin";

function isLastToken(token: KuromojiToken, tokens: KuromojiToken[]): boolean {
  const nextToken = findNextToken(token, tokens);
  if (nextToken === undefined) return true;

  return nextToken.pos === "記号" && nextToken.pos_detail_1 !== "読点";
}

function findNextToken(
  token: KuromojiToken,
  tokens: KuromojiToken[]
): KuromojiToken | undefined {
  return tokens[tokens.indexOf(token) + 1];
}

function findPreviousToken(
  token: KuromojiToken,
  tokens: KuromojiToken[]
): KuromojiToken | undefined {
  return tokens[tokens.indexOf(token) - 1];
}

export { isLastToken, findNextToken, findPreviousToken };
