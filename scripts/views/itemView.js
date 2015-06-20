
export default Backbone.View.extend({
  template: JST.menuItems,
  className: 'eachItem',

  events: {
  'click .order': 'addOrderItem'
  },

  initialize: function(){
    this.render();
    // console.log('initialize');
  },

  render: function (){
    this.$el.html(this.template(this.model.toJSON()));
    // console.log('render');
  },

  addOrderItem: function(){
    console.log(this.model.toJSON().price);
  }

});
