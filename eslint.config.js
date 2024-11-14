module.exports = {
    files: ['./src/**/*.{js,html,css}'],
    languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'linebreak-style': ['error', 'unix'],
        'no-console': 'warn',
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
}
