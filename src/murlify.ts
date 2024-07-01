import type { KuromojiToken } from "kuromojin";
import { tokenize } from "kuromojin";
import { findPreviousToken, isLastToken } from "./utils";
import { joutaify } from "./joutaify";

async function murlify(sentence: string): Promise<string> {
  const joutaified = await joutaify(sentence);
  const tokens = await tokenize(joutaified);
  return tokens.map((token) => tokenMurlify(token, tokens)).join("");
}

function tokenMurlify(token: KuromojiToken, tokens: KuromojiToken[]): string {
  // ルール1: 終助詞をゾにする
  if (token.pos_detail_1 === "終助詞") {
    // ルール1-1: 「そうだよ」は変換しない
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    const prevToken = findPreviousToken(token, tokens)!;
    const prevPrevToken = findPreviousToken(prevToken, tokens);
    if (
      prevPrevToken &&
      prevPrevToken.surface_form === "そう" &&
      prevToken.surface_form === "だ" &&
      token.surface_form === "よ"
    ) {
      return token.surface_form;
    }
    return "ゾ";
  }
  // ルール2: 文の最後の助動詞の後にゾを付与する
  if (isLastToken(token, tokens) && token.pos === "助動詞") {
    return `${token.surface_form}ゾ`;
  }

  // ルール3: 文の最後の動詞の後にゾを付与する
  if (isLastToken(token, tokens) && token.pos === "動詞") {
    return `${token.surface_form}ゾ`;
  }

  // ルール4: 文の最後の形容詞の後にゾを付与する
  if (isLastToken(token, tokens) && token.pos === "形容詞") {
    return `${token.surface_form}ゾ`;
  }

  return token.surface_form;
}

export { murlify };
