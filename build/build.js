import { build } from "esbuild";
import fs from "fs";
import path from "path";

// Function to delete the "dist" folder if it exists
function deleteFolder(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
  }
}

// Function to copy files from "src" to "dist" and rename .js files to .mjs
function copyFiles(srcDir, destDir) {
  fs.readdirSync(srcDir).forEach(file => {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file.replace(/\.js$/, ".mjs"));

    if (fs.statSync(srcPath).isDirectory()) {
      // Create the destination folder if it doesn't exist
      if (!fs.existsSync(destPath)) fs.mkdirSync(destPath);
      copyFiles(srcPath, destPath);
    } else if (file.endsWith(".js")) {
      // Read the file content and replace .js imports with .mjs
      let content = fs.readFileSync(srcPath, "utf8");
      content = replaceImportExtension(content);
      fs.writeFileSync(destPath, content, "utf8");
    }
  });
}

// Function to replace import statements from .js to .mjs
function replaceImportExtension(code) {
  return code.replace(/(from\s+["']\.\/.*?)(\.js)(["'])/g, "$1.mjs$3");
}

// Delete and recreate the "dist" folder
deleteFolder("dist");
fs.mkdirSync("dist", { recursive: true });

// Copy all ESM files to "dist" and update imports
copyFiles("src", "dist");

// Build the CommonJS version using esbuild
build({
  entryPoints: ["src/index.js"],
  outdir: "dist",
  format: "cjs",
  platform: "node",
  target: "node14",
  outExtension: { ".js": ".cjs" },
  bundle: true
}).catch(() => process.exit(1));
