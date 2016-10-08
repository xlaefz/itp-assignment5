define('hw4/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'hw4/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _hw4ConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_hw4ConfigEnvironment['default'].APP.name, _hw4ConfigEnvironment['default'].APP.version)
  };
});