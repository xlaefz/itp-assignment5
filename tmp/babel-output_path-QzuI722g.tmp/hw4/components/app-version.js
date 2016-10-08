define('hw4/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'hw4/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _hw4ConfigEnvironment) {

  var name = _hw4ConfigEnvironment['default'].APP.name;
  var version = _hw4ConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});