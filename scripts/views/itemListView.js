
import FoodCategoryView from './foodCategoryView';

export default Backbone.View.extend({
  // template: JST.menuItems,
  className: 'menuItems',



  initialize: function(options){
    this.render(options);
  },

  render: function(options){
    this.renderChildren(options);
  },

  //creates children views
  renderChildren: function(options){
    _.invoke(this.children || [], 'remove');

    this.order = options.order;

  var groupedCategories =
   _.each(this.collection.groupBy('category'), function(items, category){
     var foodCollection = new Backbone.Collection (items);
     var view = new FoodCategoryView({
      //  category: category,
      //  collection: foodCollection,
      category: this.category,
      collection: foodCollection,
      order:this.order
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
