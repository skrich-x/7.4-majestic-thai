import {Order, OrderCollection} from '../models/order';

export default Backbone.View.extend({
  template: JST.menuItems,
  className: 'eachItem',
  tagName: 'li',

  events: {
  'click .order': 'addOrderItem'
  },

  initialize: function(options){
    this.render();
    // console.log('initialize');
    this.order = options.order;
  },

  render: function (){
    this.$el.html(this.template(this.model.toJSON()));
    // console.log('render');
  },

  addOrderItem: function(event){
    var clickedItem = this.model.toJSON();
    console.log(clickedItem);
    var itemToAdd = new Order();
    itemToAdd.set({
      'item': clickedItem.item,
      'description':clickedItem.description,
      'category': clickedItem.category,
      'price': clickedItem.price,
      'id': clickedItem.objectId
    });
    console.log(itemToAdd.toJSON(), 'model added');
    this.$el.add(itemToAdd);



  }

});

Handlebars.registerHelper('priceFixed', function(price) {
  return price.toFixed(2);
});
