define('hw4/router', ['exports', 'ember', 'hw4/config/environment'], function (exports, _ember, _hw4ConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _hw4ConfigEnvironment['default'].locationType,
    rootURL: _hw4ConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('artists', function () {
      this.route('singleArtist', { path: ':id' });
    });
    this.route('artist-item');
    this.route('artistpage');
  });

  exports['default'] = Router;
});