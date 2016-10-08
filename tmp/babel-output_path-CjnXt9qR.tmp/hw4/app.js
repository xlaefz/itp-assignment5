define('hw4/app', ['exports', 'ember', 'hw4/resolver', 'ember-load-initializers', 'hw4/config/environment'], function (exports, _ember, _hw4Resolver, _emberLoadInitializers, _hw4ConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _hw4ConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _hw4ConfigEnvironment['default'].podModulePrefix,
    Resolver: _hw4Resolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _hw4ConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});