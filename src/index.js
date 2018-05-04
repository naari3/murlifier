import kuromoji from "kuromoji";
import eachCons from "each-cons";
import path from "path";

const kuromojiRoot = path.dirname(require.resolve("kuromoji/package"));

class Murlifier {
  constructor(dicPath) {
    this.dicPath = dicPath || path.join(kuromojiRoot, "dict") + path.sep;
    this.tokenizer = new Promise((resolve, reject) => {
      const builder = kuromoji.builder({ dicPath: this.dicPath });
      builder.build((error, tokenizer) => {
        if (error) {
          reject(error);
        } else {
          resolve(tokenizer);
        }
      });
    });
  }

  murlify(sentence) {
    return new Promise((resolve, reject) => {
      this.tokenizer.then(tokenizer => {
        const tokens = tokenizer.tokenize(sentence);
        resolve(this.tokensToMurSentence(this.tokensToMurTokens(tokens)));
      });
    });
  }

  tokensToMurTokens(tokens) {
    return eachCons(tokens, 2)
      .concat([[tokens[tokens.length - 1]]])
      .map(biTokens => {
        if (biTokens.length === 1 || biTokens[1].pos === "記号") {
          if (
            ["助動詞", "形容詞"].indexOf(biTokens[0].pos) >= 0 ||
            (biTokens[0].pos === "動詞" &&
              biTokens[0].conjugated_form === "基本形")
          ) {
            biTokens[0].surface_form += "ゾ";
          }
          return biTokens[0];
        } else {
          return biTokens[0];
        }
      });
  }

  tokensToMurSentence(tokens) {
    return tokens.map(token => this.murlizedWord(token)).join("");
  }

  murlizedWord(token) {
    if (token.pos_detail_1 === "終助詞") {
      return "ゾ";
    } else {
      return token.surface_form;
    }
  }
}

module.exports = Murlifier;
