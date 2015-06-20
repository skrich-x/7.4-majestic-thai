import EachItemView from './itemView';

export default Backbone.View.extend({
  template: JST.menuItems,
  className: 'menuItems',
  tagName: 'ul',


  initialize: function(){
    this.render();
  },

  render: function(){
    this.renderChildren();
  },

  //creates children views
  renderChildren: function(){
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.map((child) => {
      var view = new EachItemView({
        model: child
      });

      this.$el.append(view.el);
      return view;
    }.bind(this));

    return this;

  },

    remove: function(){
      _.invoke(this.children || [], 'remove');
      Backbone.View.prototype.remove.apply(this.arguments);

    }


});
