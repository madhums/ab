
/**
 * Expose
 */

module.exports = function (app) {
  app.get('/api/1/module', function (req, res) {
    res.json([
      { name: 'bla bla' }
    ]);
  });
};
