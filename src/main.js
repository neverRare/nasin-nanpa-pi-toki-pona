import { lex } from "./lexer.js";

const decoder = new TextDecoder("utf-8");
const code = decoder.decode(await Deno.readFile(Deno.args[0]));

const tokens = [...lex(code)];
