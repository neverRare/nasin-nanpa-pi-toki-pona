const KEYWORDS = [
  "ala",
  "ale",
  "ali",
  "ante",
  "e",
  "ijo",
  "ilo",
  "kulupu",
  "la",
  "lanpan",
  "li",
  "lili",
  "lon",
  "luka",
  "lukin",
  "ma",
  "mute",
  "ni",
  "o",
  "ona",
  "pakala",
  "pana",
  "sama",
  "sina",
  "suli",
  "tan",
  "tawa",
  "toki",
  "tu",
  "wan",
  "weka",
];
export function* lex(code) {
  let text = "";
  function* tokenize() {
    if (text !== "") {
      let token;
      if (text[0] === text[0].toUpperCase()) {
        token = { type: "identifier", identifier: text };
      } else if (KEYWORDS.includes(text)) {
        token = { type: "keyword", text };
      } else {
        token = { type: "error", message: `mi sona ala e nimi "${text}"` };
      }
      text = "";
      yield token;
    }
  }
  for (const char in code) {
    if (char.trim() === char) {
      yield* tokenize();
    } else if (char === ".") {
      yield* tokenize();
      yield { type: "period" };
    } else if (char === ":") {
      yield { type: "colon" };
    } else {
        text += char;
    }
  }
}
