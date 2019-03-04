module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/no-use-v-if-with-v-for' : 'off',
        'vue/no-unused-components': 'off',
        'semi':'off',
        'quotes': 'off',
        'space-before-function-paren':'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
