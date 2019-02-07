import kuromoji from "kuromoji";
import "@babel/polyfill";
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
    return tokens.map(token => {
      if (this.isLastToken(token, tokens)) {
        if (this.isAddableMurWord(token)) {
          token.surface_form += "ゾ";
        }
      }
      return token;
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

  isLastToken(targetToken, allTokens) {
    const nextToken = this.findNextToken(targetToken, allTokens);
    if (nextToken === undefined) return true;

    return nextToken.pos === "記号" && nextToken.pos_detail_1 !== "読点";
  }

  findNextToken(targetToken, allTokens) {
    return allTokens[allTokens.indexOf(targetToken) + 1];
  }

  isAddableMurWord(token) {
    return (
      ["助動詞", "形容詞"].indexOf(token.pos) >= 0 ||
      (token.pos === "動詞" && token.conjugated_form === "基本形")
    );
  }
}

module.exports = Murlifier;
