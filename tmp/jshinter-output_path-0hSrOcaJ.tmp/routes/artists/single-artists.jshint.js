QUnit.module('JSHint | routes/artists/single-artists.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/artists/single-artists.js should pass jshint.\nroutes/artists/single-artists.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/artists/single-artists.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/artists/single-artists.js: line 5, col 15, \'template literal syntax\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
});
