import Ember from 'ember';

export default Ember.Component.extend({
  isExpensive: Ember.computed('song.price', function() {
    return this.get('song.price') < 1;
  }),
  
  isPopular: Ember.computed('song.playCount', function() {
    return this.get('song.playCount') >= 20;
  })
});
