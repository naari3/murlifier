import Murlifier from "../src";

describe("murlifier", () => {
  const murlifier = new Murlifier();
  describe("murlify", () => {
    it("終助詞をゾにする", async () => {
      const sentence = "肝心な所洗い忘れてるよ";
      const data = await murlifier.murlify(sentence);
      expect(data).toEqual("肝心な所洗い忘れてるゾ");
    });
    it("文の最後の助動詞の後にゾを付与する", async () => {
      const sentence = "てゅわぁぁぁ！忘れてた！";
      const data = await murlifier.murlify(sentence);
      expect(data).toEqual("てゅわぁぁぁ！忘れてたゾ！");
    });
    it("文の最後の動詞の後にゾを付与する", async () => {
      const sentence = "急用があり、急いでいるので走る";
      const data = await murlifier.murlify(sentence);
      expect(data).toEqual("急用があり、急いでいるので走るゾ");
    });
  });
  describe("isLastToken", () => {
    it("1つのみの形態素を文の終わりと認識すること", () => {
      const biTokens = [
        {
          word_id: 22540,
          word_type: "KNOWN",
          word_position: 34,
          surface_form: "ん",
          pos: "助動詞",
          pos_detail_1: "*",
          pos_detail_2: "*",
          pos_detail_3: "*",
          conjugated_type: "不変化型",
          conjugated_form: "基本形",
          basic_form: "ん",
          reading: "ン",
          pronunciation: "ン"
        }
      ];
      expect(murlifier.isLastToken(biTokens)).toBe(true);
    });
    it("句点を文の終わりと認識すること", () => {
      const biTokens = [
        {
          word_id: 22540,
          word_type: "KNOWN",
          word_position: 34,
          surface_form: "ん",
          pos: "助動詞",
          pos_detail_1: "*",
          pos_detail_2: "*",
          pos_detail_3: "*",
          conjugated_type: "不変化型",
          conjugated_form: "基本形",
          basic_form: "ん",
          reading: "ン",
          pronunciation: "ン"
        },
        {
          word_id: 90940,
          word_type: "KNOWN",
          word_position: 35,
          surface_form: "。",
          pos: "記号",
          pos_detail_1: "句点",
          pos_detail_2: "*",
          pos_detail_3: "*",
          conjugated_type: "*",
          conjugated_form: "*",
          basic_form: "。",
          reading: "。",
          pronunciation: "。"
        }
      ];
      expect(murlifier.isLastToken(biTokens)).toBe(true);
    });
    it("句点を文の終わりと認識すること", () => {
      const biTokens = [
        {
          word_id: 24330,
          word_type: "KNOWN",
          word_position: 11,
          surface_form: "あり",
          pos: "助動詞",
          pos_detail_1: "*",
          pos_detail_2: "*",
          pos_detail_3: "*",
          conjugated_type: "五段・ラ行アル",
          conjugated_form: "連用形",
          basic_form: "ある",
          reading: "アリ",
          pronunciation: "アリ"
        },
        {
          word_id: 90910,
          word_type: "KNOWN",
          word_position: 13,
          surface_form: "、",
          pos: "記号",
          pos_detail_1: "読点",
          pos_detail_2: "*",
          pos_detail_3: "*",
          conjugated_type: "*",
          conjugated_form: "*",
          basic_form: "、",
          reading: "、",
          pronunciation: "、"
        }
      ];
      expect(murlifier.isLastToken(biTokens)).toBe(false);
    });
  });
});
