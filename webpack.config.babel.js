export default {
  mode: 'development',
  entry: `${__dirname}/src/main.jsx`,
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        include: `${__dirname}/src`
      }
    ]
  }
};
