module.exports = {
    "parser": "babel-eslint",
    "extends": ["standard","plugin:react/recommended"],
    "plugins": [
        "standard",
        "promise",
        "react",
    ],
    "rules": {
        "react/prop-types": ["off"],
        "react/display-name":["off"],
        "indent": ["error",4],
    }
};
