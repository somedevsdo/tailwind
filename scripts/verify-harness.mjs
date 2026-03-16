import { readFile } from "node:fs/promises";

const outputPath = new URL("../tests/harness/output.css", import.meta.url);

const output = await readFile(outputPath, "utf8");

const checks = [
  { name: "color utility", pattern: ".bg-clr-background" },
  { name: "text utility", pattern: ".text-clr-text" },
  { name: "spacing utility", pattern: ".p-4" },
  { name: "font utility", pattern: ".font-font-family-header" },
  { name: "token mapping", pattern: "var(--clr-background)" }
];

const failures = checks.filter((check) => !output.includes(check.pattern));

if (failures.length > 0) {
  const names = failures.map((failure) => failure.name).join(", ");
  throw new Error(`Tailwind harness validation failed. Missing: ${names}`);
}

console.log("Tailwind harness validation passed.");
