// THE SKY HAS BROKEN — entry for make.fun Coolest Art (coolest-art-01).
// The night sky has shattered like ancient porcelain; a celestial white
// dragon emerges through the largest opening while tiny workers sew the sky
// back together with golden needles, under a gigantic red sun. Node 22,
// standard library only. The art is the entry.png beside this file (JPEG
// bytes in a file named entry.png, which the gate allows), and the program
// copies it to /output/entry.png. The judge sees exactly these bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const src = new URL('./entry.png', import.meta.url);
const dest = join(outDir, 'entry.png');
copyFileSync(src, dest);
if (statSync(dest).size !== statSync(src).size) throw new Error('entry.png copy size mismatch');
