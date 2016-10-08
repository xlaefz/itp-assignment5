define('hw4/tests/helpers/resolver', ['exports', 'hw4/resolver', 'hw4/config/environment'], function (exports, _hw4Resolver, _hw4ConfigEnvironment) {

  var resolver = _hw4Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: _hw4ConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _hw4ConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});