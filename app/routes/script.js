import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('script', params.script_id);
  },

  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
      this.transitionTo('checkout');
    },
  }
});
