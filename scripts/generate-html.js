#!/usr/bin/env node
// Gera index.html para deploy estático após o build

import { readdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const assetsDir = join(rootDir, ".output", "public", "assets");
const publicDir = join(rootDir, ".output", "public");

try {
  const files = readdirSync(assetsDir);
  const jsFiles = files.filter((f) => f.endsWith(".js"));
  const cssFiles = files.filter((f) => f.endsWith(".css"));

  const jsTags = jsFiles
    .map((f) => `  <script type="module" crossorigin src="/assets/${f}"></script>`)
    .join("\n");
  const cssTags = cssFiles
    .map((f) => `  <link rel="stylesheet" href="/assets/${f}" />`)
    .join("\n");

  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="W3JF — Agência de IA para vendas inteligentes" />
  <title>W3JF — Venda mais inteligente</title>
  <link rel="icon" type="image/svg+xml" href="/logo-w3jf.svg" />
${cssTags}
${jsTags}
</head>
<body>
  <div id="root"></div>
</body>
</html>`;

  writeFileSync(join(publicDir, "index.html"), html, "utf-8");
  console.log("✅ index.html gerado em .output/public/index.html");
} catch (err) {
  console.error("❌ Erro ao gerar index.html:", err.message);
  process.exit(1);
}