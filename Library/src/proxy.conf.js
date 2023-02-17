const PROXY_CONFIG = [
  {
    context: ['/api/books', '/api/OrderStatus', '/api/categories', '/api/auth/register', '/api/auth/login'],
    target: 'https://localhost:7283',
    secure: false,
  },
];

module.exports = PROXY_CONFIG;
