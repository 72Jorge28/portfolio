# R10 owner preview preparation — 2026-10-26

Historical preparation record; the observations below describe the handoff checks,
not newly verified server liveness. R10 subsequently passed: the owner answered
**“Lo apruebo”** to **“¿Apruebas esta versión para cerrar la SDD, dejando el rediseño para después?”**
after this updated actual preview. Final independent **VEREDICTO: APROBADO** and
administrative closure are recorded in `validation.md`. No publication permission.
No new implementation or repeated test matrix was performed for this preparation.

- Spanish: http://127.0.0.1:3131/es/projects
- English: http://127.0.0.1:3131/en/projects
- Intentionally live owned Next PID72405, UID1000, CWD
  `/tmp/opencode/spec005-a4/prod`. Port3131 was free before launch; no process
  was stopped. Reverify PID/CWD/listener before future management.
- Launch: `node node_modules/next/dist/bin/next start --hostname 127.0.0.1 --port 3131`.
  This invokes the existing start-script binary directly without pnpm dependency
  recovery. No install, rebuild, root configuration or root `.next` change.
- Log: `/tmp/opencode/spec005-amendment-owner-preview/server.log`.
- Reused reviewed build: `v1ReJ_mKnhx437kbFY4df`.
- Fresh108/108 source matches in repository and isolated production copy against
  `amendment-a4/source-final.json`; durable manifest `amendment-a4/source-final.sha256`
  SHA256 `b77f6a5e298f6daf47a966d4f10e1783c2f774ba70c7ba744d659840163fd24d`.
- Fresh EN/ES HTTP200, build ID and poster path in payload,12 served JS/CSS assets
  per locale matched byte-for-byte to the isolated build. All three media HTTP200
  with correct MIME types and source-byte equality.
- Poster: PNG1920×1080, SHA256
  `95229f54968dfe293009ee28afd693c7eca28b772d968ca5659b314487869380`.
  Downloaded response opened for image inspection; MCP confirms three loaded
  1920×1080 posters, localized video-enlargement names and zero inline players.
- Original PNG SHA256
  `52441f615b82ceb16eca473f0ebc834248d2f0c2342c53a9c7ba838a3dcc86d3`;
  original MP4 remains7722052 bytes, SHA256
  `bdd4d58057cc961023c415a64af5f689e84488e594e9de29e1db1b1cfe0a74bd`.
- Root `.next` remains the old build, not the served preview;1923 files and19
  protected local files matched retained hashes. Do not serve root as this handoff.
- Fresh raw HTTP/chunk/process and browser records plus manifest copies:
  `/tmp/opencode/spec005-amendment-owner-preview/`. Temporary runtime evidence
  and server availability may be lost on environment restart.

This bounded handoff supports presentation of RF-2–8/RF-12 and RNF-1–6, not new
full requirement validation. A4/A5 remain the attributed technical evidence.
No tests created/modified, no full checks rerun; no new known related failure.
Inherited header/text and native-browser limitations remain as recorded in A5.
The owner can enlarge the video using its corner control, then press native Play;
opening the viewer alone must not play. At preparation, final aesthetic/behavior
acceptance was still required and CAMBIOS NECESARIOS concerned only R10; that gate
is now satisfied by the separate final acceptance above. The preview was intentionally
left running; closure did not check liveness or start, stop or manage any server.
