const conversionRules = [
  { polite: "ませんでした", joutai: "なかった" },
  { polite: "ありません", joutai: "ない" },
  { polite: "きましょう", joutai: "こう" },
  { polite: "ないです", joutai: "ない" },
  { polite: "いました", joutai: "った" },
  { polite: "ですよね", joutai: "だよな" },
  { polite: "ましょう", joutai: "よう" },
  { polite: "きません", joutai: "かない" },
  { polite: "きました", joutai: "った" },
  { polite: "ります", joutai: "る" },
  { polite: "します", joutai: "する" },
  { polite: "きます", joutai: "く" },
  { polite: "ですよ", joutai: "だよ" },
  { polite: "ません", joutai: "ない" },
  { polite: "います", joutai: "う" },
  { polite: "ました", joutai: "た" },
  { polite: "です", joutai: "だ" },
  { polite: "ます", joutai: "る" },
  { polite: "よね", joutai: "な" },
];

async function joutaify(sentence: string): Promise<string> {
  const ruledSentence = conversionRules.reduce(
    (acc, rule) => acc.replace(rule.polite, rule.joutai),
    sentence
  );
  return ruledSentence;
}

export { joutaify };
