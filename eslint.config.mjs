import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends(
		'next/core-web-vitals',
		'next/typescript',
		tseslint.configs.recommendedTypeChecked
	),
	{
		parserOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			project: [
				'./tsconfig.json',
				'./tsconfig.node.json',
				'./tsconfig.app.json',
			],
			tsconfigRootDir: __dirname,
		},
	},
];

export default eslintConfig;
