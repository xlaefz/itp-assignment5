QUnit.module('JSHint | routes/search/results.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/search/results.js should pass jshint.\nroutes/search/results.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/search/results.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/search/results.js: line 7, col 17, \'template literal syntax\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
});
