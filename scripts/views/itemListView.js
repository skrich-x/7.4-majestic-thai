import EachItemView from './itemView';

// import OrderCollection from '../models/order';

export default Backbone.View.extend({
  template: JST.menuItems,
  className: 'menuItems',


  initialize: function(){
    this.render();
  },

  render: function(){
    this.renderChildren();
    // console.log(this.children);
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
