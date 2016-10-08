import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    console.log(params);
      //var url = 'https://itunes.apple.com/search?term='+ params.term + '&callback=?';
      var url = `https://itunes.apple.com/search?term=${params.term}&callback=?`;
      var promise = $.getJSON(url);
      return promise;
  },
  afterModel: function(model){
    console.log(model);
  }

});
