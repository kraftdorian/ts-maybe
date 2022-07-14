module.exports = {
  roots: [
    "__tests__"
  ],
  moduleFileExtensions: [
    "js",
    "ts",
  ],
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)",
  ],
  testPathIgnorePatterns: [
    "\\\\node_modules\\\\",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
