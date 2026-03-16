import { readFile } from "node:fs/promises";

const outputPath = new URL("../tests/harness/output.css", import.meta.url);

const output = await readFile(outputPath, "utf8");

const checks = [
  { name: "color utility", pattern: ".bg-primary-background" },
  { name: "text utility", pattern: ".text-primary-text" },
  { name: "spacing utility", pattern: ".p-4" },
  { name: "font utility", pattern: ".font-header" },
  { name: "token mapping", pattern: "var(--primary-background)" }
];

const failures = checks.filter((check) => !output.includes(check.pattern));

if (failures.length > 0) {
  const names = failures.map((failure) => failure.name).join(", ");
  throw new Error(`Tailwind harness validation failed. Missing: ${names}`);
}

console.log("Tailwind harness validation passed.");
