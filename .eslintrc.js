module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "plugins" : {"prettier"},
    "extends": "eslint:recommended", "prettier",
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "rules": {
        "no-console": 1,  
        "prettier/prettier": 2 
    }
};
