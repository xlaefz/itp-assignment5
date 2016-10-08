import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('artists', function() {
    this.route('singleArtist', {path: ':id'});
  });
  this.route('artist-item');
  this.route('artistpage');
});

export default Router;
