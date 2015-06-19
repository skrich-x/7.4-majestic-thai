var Item = Backbone.Model.extend({
  idAttribute: 'objectId',

  defaults: {
    item: '',
    price: 0,
    description: '',
    category: ''
  }
});

var ItemListCollection = Backbone.Collection.extend({
    model: Item,
    url: 'thaiItems.json'
});

console.log('itemlistJS');

export default {Item, ItemListCollection};
