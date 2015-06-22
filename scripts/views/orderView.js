import {Order} from './orderView';

export default Backbone.View.extend({
  template: JST.order,
  className: 'order',

  events: {
    'click .submitOrder': 'submitOrder'
  },

  initialize: function(){
    this.render();
    this.listenTo(this.collection, 'add remove', this.render);
  },

  render: function(){
    this.$el.html(this.template(this.collection.serialize()));
  },

  // submitOrder: function(){
  //   this.collection.save();
  //   console.log(submitOrder);
  // }

});
