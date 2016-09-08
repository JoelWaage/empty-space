import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    removeFromCart(item) {
      this.get('items').removeObject(item);
      this.set('items');
    }
  }
});
