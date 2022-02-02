module.exports = {
    presets:[
        "@babel/preset-env"
    ],
    plugins:[
        '@babel/plugin-syntax-dynamic-import',
			'@babel/plugin-transform-object-assign',
			['@babel/plugin-proposal-decorators', { legacy: true }],
			'@babel/plugin-proposal-class-properties',
			//require.resolve('@babel/plugin-proposal-object-rest-spread'),
			require.resolve('babel-plugin-macros'),
        ["@babel/plugin-transform-react-jsx",
        { pragma: 'h', pragmaFrag: 'Fragment' },],
        "@emotion"]
};