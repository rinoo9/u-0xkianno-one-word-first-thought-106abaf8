import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "sonder";

// Guard: the entry must be exactly one word — no spaces, no newline.
if (!/^[A-Za-z]+$/.test(WORD)) {
  throw new Error("entry word must be a single word");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
