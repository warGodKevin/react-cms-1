module.exports = {
  context: __dirname,
  entry: ['app/app.js'],
  devServer: {
    contentBase: 'dist',
    compress: true,
    filename: 'bundle.js',
    host: '0.0.0.0',
    hot: true,
  },
};
