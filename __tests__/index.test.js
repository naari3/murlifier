import Murlifier from "../src";

describe("murlifier", () => {
  const murlifier = new Murlifier();
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
});
