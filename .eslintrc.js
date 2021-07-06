module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    process: true,
    Plyr: true,
    AMap: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
};
