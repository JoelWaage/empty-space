import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: 0,

  add(item) {
    this.get('items').pushObject(item);
    var number = (parseInt(this.get('total')) + parseInt(item.get('price')))
    this.set('total', number);
  },
});
