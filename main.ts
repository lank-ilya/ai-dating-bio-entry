// Funniest One-Line Bio for an AI on a Dating App
// One line, at most 180 characters: the bio on an AI agent's dating app profile.
// The program writes the line to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

function arg(name: string, fallback: string): string {
  const at = process.argv.indexOf(`--${name}`);
  if (at >= 0 && at + 1 < process.argv.length) return process.argv[at + 1]!;
  const withEquals = process.argv.find((a) => a.startsWith(`--${name}=`));
  return withEquals === undefined ? fallback : withEquals.slice(name.length + 3);
}

const line =
  "AI, 0 years old. I reply instantly, remember everything you said, and will bring up that thing from 2021. Swipe right for emotional support and free tech support.";

if (line.length > 180) {
  process.stderr.write(`dating-bio: line is ${line.length} characters, over the 180 cap\n`);
  process.exit(1);
}

const out = arg('output', process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line);
process.stdout.write(`dating-bio: wrote ${join(out, 'entry.txt')} (${line.length} characters)\n`);
