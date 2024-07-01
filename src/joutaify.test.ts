import { expect, it } from "vitest";

import { joutaify } from "./joutaify";

// { polite: "ませんでした", joutai: "なかった" },
it("来ませんでした → 来なかった", async () => {
  const result = await joutaify("来ませんでした");
  expect(result).toBe("来なかった");
});

// { polite: "ありません", joutai: "ない" },
it("ありません → ない", async () => {
  const result = await joutaify("ではありません");
  expect(result).toBe("ではない");
});

// { polite: "きましょう", joutai: "こう" },
it("行きましょう → 行こう", async () => {
  const result = await joutaify("行きましょう");
  expect(result).toBe("行こう");
});

// { polite: "ないです", joutai: "ない" },
it("来ないです → 来ない", async () => {
  const result = await joutaify("来ないです");
  expect(result).toBe("来ない");
});

// { polite: "いました", joutai: "った" },
it("思いました → 思った", async () => {
  const result = await joutaify("思いました");
  expect(result).toBe("思った");
});

// { polite: "ですよね", joutai: "だよな" },
it("そうですよね → そうだよな", async () => {
  const result = await joutaify("そうですよね");
  expect(result).toBe("そうだよな");
});

// { polite: "ましょう", joutai: "よう" },
it("しましょう → しよう", async () => {
  const result = await joutaify("しましょう");
  expect(result).toBe("しよう");
});

// { polite: "きません", joutai: "かない" },
it("行きません → 行かない", async () => {
  const result = await joutaify("行きません");
  expect(result).toBe("行かない");
});

// { polite: "きました", joutai: "った" },
it("行きました → 行った", async () => {
  const result = await joutaify("行きました");
  expect(result).toBe("行った");
});

// { polite: "ります", joutai: "る" },
it("走ります → 走る", async () => {
  const result = await joutaify("走ります");
  expect(result).toBe("走る");
});

// { polite: "します", joutai: "する" },
it("お邪魔します → お邪魔する", async () => {
  const result = await joutaify("お邪魔します");
  expect(result).toBe("お邪魔する");
});

// { polite: "きます", joutai: "く" },
it("行きます → 行く", async () => {
  const result = await joutaify("行きます");
  expect(result).toBe("行く");
});

// { polite: "ですよ", joutai: "だよ" },
it("そうですよ → そうだよ", async () => {
  const result = await joutaify("そうですよ");
  expect(result).toBe("そうだよ");
});

// { polite: "ません", joutai: "ない" },
it("見ません → 見ない", async () => {
  const result = await joutaify("見ません");
  expect(result).toBe("見ない");
});

// { polite: "います", joutai: "う" },
it("行います → 行う", async () => {
  const result = await joutaify("行います");
  expect(result).toBe("行う");
});

// { polite: "ました", joutai: "た" },
it("見ました → 見た", async () => {
  const result = await joutaify("見ました");
  expect(result).toBe("見た");
});

// { polite: "です", joutai: "だ" },
it("そうです → そうだ", async () => {
  const result = await joutaify("そうです");
  expect(result).toBe("そうだ");
});

// { polite: "ます", joutai: "る" },
it("見ます → 見る", async () => {
  const result = await joutaify("見ます");
  expect(result).toBe("見る");
});

// { polite: "よね", joutai: "な" },
it("そうですよね → そうだよな", async () => {
  const result = await joutaify("そうですよね");
  expect(result).toBe("そうだよな");
});
