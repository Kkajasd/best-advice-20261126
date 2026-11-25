import { mkdirSync, writeFileSync } from "node:fs";

// The best advice I ever got, as one sentence: a real moment (my father
// patching a tyre in the rain when I was twelve), the advice itself, and
// why it still holds — it lands because the lesson keeps repeating.
const LINE =
  "When I was twelve, my father, patching a tyre in the rain, said: fix it properly once, or you'll be fixing it forever — and I still hear him every time I'm tempted to cut a corner.";

// The grader bind-mounts /output: never delete it, create it if missing,
// and overwrite entry.txt in place.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
