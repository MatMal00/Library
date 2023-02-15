const PROXY_CONFIG = [
  {
    context: ['/api/books', '/api/OrderStatus', '/api/categories'],
    target: 'https://localhost:7283',
    secure: false,
  },
];

module.exports = PROXY_CONFIG;
