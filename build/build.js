import { build } from "esbuild";
import fs from "fs";
import path from "path";

// Hapus folder dist jika ada
function deleteFolder(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
  }
}

// Fungsi untuk menyalin file dengan ekstensi .mjs
function copyFiles(srcDir, destDir) {
  fs.readdirSync(srcDir).forEach(file => {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);

    if (fs.statSync(srcPath).isDirectory()) {
      if (!fs.existsSync(destPath)) fs.mkdirSync(destPath);
      copyFiles(srcPath, destPath);
    } else if (file.endsWith(".js")) {
      fs.copyFileSync(srcPath, destPath.replace(/\.js$/, ".mjs"));
    }
  });
}

// Hapus dan buat ulang folder dist
deleteFolder("dist");
fs.mkdirSync("dist", { recursive: true });

// Salin semua file dari src ke dist untuk ESM
copyFiles("src", "dist");

// Build versi CJS
build({
  entryPoints: ["src/index.js"],
  outdir: "dist",
  format: "cjs",
  platform: "node",
  target: "node14",
  outExtension: { ".js": ".cjs" },
  bundle: true
}).catch(() => process.exit(1));
