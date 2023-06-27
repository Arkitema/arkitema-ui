module.exports = {
  preset: 'ts-jest',
  "transform": {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  "testMatch": ["**/*.test.js", "**/*.test.ts"]
};
