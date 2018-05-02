import "babel-polyfill";
import kuromoji from "kuromoji";
import eachCons from "each-cons";

const builder = kuromoji.builder({
  dicPath: "node_modules/kuromoji/dict"
});

const murlify = sentence => {
  return new Promise((resolve, reject) => {
    builder.build((err, tokenizer) => {
      if (err) reject(err);

      const tokens = tokenizer.tokenize(sentence);

      resolve(tokensToMurSentence(tokensToMurTokens(tokens)));
    });
  });
};

const tokensToMurTokens = tokens => {
  return eachCons(tokens, 2)
    .concat([[tokens[tokens.length - 1]]])
    .map(biTokens => {
      if (biTokens.length === 1 || biTokens[1].pos === "記号") {
        if (biTokens[0].pos === "助動詞" || biTokens[0].pos === "形容詞") {
          biTokens[0].surface_form += "ゾ";
        }
        return biTokens[0];
      } else {
        return biTokens[0];
      }
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
