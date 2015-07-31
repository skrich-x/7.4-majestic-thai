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
    this.order = options.order;
  },

  render: function (){
    this.$el.html(this.template(this.model.toJSON()));
  },

  addOrderItem: function(event){
    this.order.add(this.model);
    console.log(this.order);
    var itemToAdd = new Order();
    itemToAdd.set({
      'item': clickedItem.item,
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
