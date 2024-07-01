import { expect, it } from "vitest";

import { murlify } from "./murlify";

// ルール1: 終助詞をゾにする
it("終助詞をゾにする", async () => {
  const result = await murlify("肝心なところ洗い忘れてるよ");
  expect(result).toBe("肝心なところ洗い忘れてるゾ");
});

// ルール1-1: 「そうだよ」は変換しない
it("「そうだよ」は変換しない", async () => {
  const result = await murlify("そうだよ");
  expect(result).toBe("そうだよ");
});

// ルール2: 文の最後の助動詞の後にゾを付与する
it("文の最後の助動詞の後にゾを付与する", async () => {
  const result = await murlify("てゅわぁぁぁ！忘れてた！");
  expect(result).toBe("てゅわぁぁぁ！忘れてたゾ！");
});

// ルール3: 文の最後の動詞の後にゾを付与する
it("文の最後の動詞の後にゾを付与する", async () => {
  const result = await murlify("急用があり、急いでいるので走る");
  expect(result).toBe("急用があり、急いでいるので走るゾ");
});

// ルール4: 文の最後の形容詞の後にゾを付与する
it("文の最後の形容詞の後にゾを付与する", async () => {
  const result = await murlify("このケーキは美味しい");
  expect(result).toBe("このケーキは美味しいゾ");
});

// 敬体は常体に変換する します -> するゾ
it("敬体は常体に変換する", async () => {
  const result = await murlify("お邪魔します");
  expect(result).toBe("お邪魔するゾ");
});

// 敬体は常体に変換する です -> だゾ
it("敬体は常体に変換する", async () => {
  const result = await murlify("こっちです");
  expect(result).toBe("こっちだゾ");
});

// 敬体は常体に変換する ます -> るゾ
it("敬体は常体に変換する", async () => {
  const result = await murlify("行きます");
  expect(result).toBe("行くゾ");
});

// 敬体は常体に変換する ません -> ないゾ
it("敬体は常体に変換する", async () => {
  const result = await murlify("行きません");
  expect(result).toBe("行かないゾ");
});
