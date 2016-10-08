define('hw4/routes/artists/single-artists', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      var url = 'http://itp-api.herokuapp.com/api/artists/' + params.id + '/songs/';
      return $.getJSON(url);
    },
    afterModel: function afterModel(model) {
      console.log(model);
    }
  });
});