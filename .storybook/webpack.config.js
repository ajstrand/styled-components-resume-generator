module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        'style-loader',
        // Translates CSS into CommonJS
        'css-loader',
        // Compiles Sass to CSS
        'sass-loader',
      ],
    },
    {
    test: /\.tsx|ts?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve("babel-loader"),
      },
      require.resolve("react-docgen-typescript-loader")
    ],
  },
  {
    test: /\.jsx|js?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve("babel-loader")
      },
      require.resolve("react-docgen-typescript-loader")
    ],
  }
  );
  config.node = {
    fs: 'empty',
    module:"empty"
}
  config.resolve.extensions.push('.ts', '.tsx', '.js', ".jsx");
  return config;
  };
