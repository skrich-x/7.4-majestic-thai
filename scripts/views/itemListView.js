export default Backbone.View.extend({
  template: JST.menuItems,
  className: 'items',

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.collection.toJSON()));
    console.log(this);
  }
});
