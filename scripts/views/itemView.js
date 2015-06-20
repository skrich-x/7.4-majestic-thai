
export default Backbone.View.extend({
  template: JST.menuItems,
  className: 'eachItem',

  events: {
  'click .order': 'addOrderItem'
  },

  initialize: function(){
    this.render();
  },

  render: function (){
    this.$el.html(this.template(this.model.toJSON()));
  },

  addOrderItem: function(){
    console.log(this);
  }

});
