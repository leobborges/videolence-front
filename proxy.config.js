const proxy = [
    {
      context: '/predict',
      target: 'http://localhost:5000',
      pathRewrite: {'^/predict' : ''}
    }
  ];
  module.exports = proxy;