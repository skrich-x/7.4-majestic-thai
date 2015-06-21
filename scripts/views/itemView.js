import {OrderCollection} from '../models/order';

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

  addOrderItem: function(e){
    e.preventDefault();
    console.log(this.model.toJSON().price);

    // this.order.add(this.model);
    // console.log('collection',this.order);

    //^^^^creating error referencing "add"

  }

});
