define('hw4/tests/test-helper', ['exports', 'hw4/tests/helpers/resolver', 'ember-qunit'], function (exports, _hw4TestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_hw4TestsHelpersResolver['default']);
});