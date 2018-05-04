import murlify from "../src";

describe("murlify", () => {
  it("終助詞をゾにする", async () => {
    const sentence = "肝心な所洗い忘れてるよ";
    const data = await murlify(sentence);
    expect(data).toEqual("肝心な所洗い忘れてるゾ");
  });
});
