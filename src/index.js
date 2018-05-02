import "babel-polyfill";
import kuromoji from "kuromoji";

const builder = kuromoji.builder({
  dicPath: "node_modules/kuromoji/dict"
});

const murlify = sentence => {
  return new Promise((resolve, reject) => {
    builder.build((err, tokenizer) => {
      if (err) reject(err);

      const tokens = tokenizer.tokenize(sentence);

      resolve(tokensToMurSentence(tokens));
    });
  });
};

const tokensToMurSentence = tokens => {
  return tokens.map(token => murlizedWord(token)).join("");
};

const murlizedWord = token => {
  if (token.pos_detail_1 === "終助詞") {
    return "ゾ";
  } else {
    return token.surface_form;
  }
};

export default murlify;
