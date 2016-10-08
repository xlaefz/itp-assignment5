define('hw4/tests/routes/search/results.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/search/results.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/search/results.js should pass jshint.\nroutes/search/results.js: line 8, col 21, \'$\' is not defined.\n\n1 error');
  });
});