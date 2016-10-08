define('hw4/routes/artists', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return $.ajax({
        url: 'http://itp-api.herokuapp.com/api/artists'
      }).then(function (response) {
        return response.artists;
      });
    }
  });
});