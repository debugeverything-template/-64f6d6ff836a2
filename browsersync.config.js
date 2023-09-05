module.exports = {
  files: ['./index.html'],
  server: {
    baseDir: './',
  },
  middleware: [
    function (_req, res, next) {
      res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
      res.setHeader('Cross-Origin-Embedder-Policy', 'credentialless');

      next();
    },
  ],
};
