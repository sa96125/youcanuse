module.exports = {
	parser: '@babel/eslint-parser',
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	parserOptions: {
		requireConfigFile: false,
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'no-undef': 0,
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'no-unused-vars': 1,
		'no-empty': 0,
		'no-useless-escape': 1,
		'no-fallthrough': 1,
		'no-extra-boolean-cast': 1,
		'react/prop-types': 0,
		'react/no-deprecated': 0,
		'react/display-name': 0,
		'react/no-find-dom-node': 1,
		'react/no-unescaped-entities': 'warn',
		'react/no-string-refs': 'warn',
		'react/jsx-no-target-blank': 'warn',
		'react/no-children-prop': 0,
	},
};
