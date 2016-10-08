define('hw4/tests/routes/demo.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/demo.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/demo.js should pass jshint.\nroutes/demo.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/demo.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});