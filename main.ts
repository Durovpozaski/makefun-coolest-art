// Whale Lighthouse — entry for make.fun Coolest Art (coolest-art-01).
// A giant blue whale carries a tiny lighthouse through a starry night sea,
// under a huge golden moon. Node 22, standard library only. The art is the
// entry.png beside this file (JPEG bytes in a file named entry.png, which the
// gate allows), and the program copies it to /output/entry.png. The judge
// sees exactly these bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
