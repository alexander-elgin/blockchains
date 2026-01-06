import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import json from "@eslint/json";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["src/**/*.{ts}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.node } },
  tseslint.configs.recommended,
  { files: ["src/**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
]);
