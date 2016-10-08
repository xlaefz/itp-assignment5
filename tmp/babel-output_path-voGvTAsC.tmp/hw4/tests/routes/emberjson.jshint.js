define('hw4/tests/routes/emberjson.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/emberjson.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/emberjson.js should pass jshint.\nroutes/emberjson.js: line 5, col 12, \'$\' is not defined.\n\n1 error');
  });
});