import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  casting: DS.attr(),
  description: DS.attr(),
  genre: DS.attr(),
  image: DS.attr(),
  title: DS.attr(),
  price: DS.attr()
});
