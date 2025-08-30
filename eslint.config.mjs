import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend Next.js recommended configurations and integrate with Prettier
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "prettier" // Prevents conflicts between ESLint and Prettier
  ),
  {
    // Custom rules for better code quality and consistency
    rules: {
      // Console logging - warn about console.log but allow warn/error for debugging
      "no-console": ["warn", { allow: ["warn", "error"] }],

      // Prevent debugger statements in production code
      "no-debugger": "error",

      // Enforce const over let when variables aren't reassigned
      "prefer-const": "error",

      // Prevent var usage in favor of let/const for better scoping
      "no-var": "error",

      // Enforce shorthand object properties (e.g., { name } instead of { name: name })
      "object-shorthand": "error",

      // Enforce template literals over string concatenation
      "prefer-template": "error",

      // Catch unused variables but ignore variables starting with underscore
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],

      // Warn about any type usage to encourage better typing
      "@typescript-eslint/no-explicit-any": "warn",

      // React-specific rules for better component quality
      "react/jsx-key": "error", // Require key prop for list items
      "react/jsx-no-duplicate-props": "error", // Prevent duplicate props
      "react/jsx-no-undef": "error", // Prevent undefined JSX elements
      "react/no-array-index-key": "warn", // Warn about using array index as key
      "react/no-unescaped-entities": "error", // Prevent unescaped HTML entities
      "react/self-closing-comp": "error", // Enforce self-closing tags
    },
  },
  {
    // Files to ignore during linting
    ignores: [
      "node_modules/**",
      ".next/**", // Next.js build output
      "out/**", // Static export output
      "build/**", // Build output
      "next-env.d.ts", // Next.js type definitions
      "coverage/**", // Test coverage reports
    ],
  },
];

export default eslintConfig;
