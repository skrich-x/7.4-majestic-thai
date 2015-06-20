import EachItemView from './itemView';

import FoodCategoryView from './foodCategoryView';

export default Backbone.View.extend({
  template: JST.menuItems,
  className: 'menuItems',


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
      var view = new FoodCategoryView({
        model: child,
        collection: this.collection
      });

      this.$el.append(view.el);
      return view;
    }.bind(this));

    _.each(this.collection.groupBy('category'), function(item, category) {
           console.log(item,category);
           })



    return this;

  },

    remove: function(){
      _.invoke(this.children || [], 'remove');
      Backbone.View.prototype.remove.apply(this.arguments);

    }


});
