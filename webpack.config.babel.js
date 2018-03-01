export default {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
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
