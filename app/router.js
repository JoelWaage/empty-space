import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('script', {path: '/script/:script_id'});
  this.route('checkout');
});

export default Router;
