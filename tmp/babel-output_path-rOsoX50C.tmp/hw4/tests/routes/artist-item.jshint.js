define('hw4/tests/routes/artist-item.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/artist-item.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/artist-item.js should pass jshint.\nroutes/artist-item.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/artist-item.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});