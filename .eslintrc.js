module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "jsx-quotes": ["error", "prefer-single"],
     },
     "globals": {
        "window": true,
        "document": true
    },
    "env": {
        "es6": true,
        "node": true,
        "browser": true
      },
    "parser": "babel-eslint",
    "parserOptions": {
    "sourceType": "module"
    }
};