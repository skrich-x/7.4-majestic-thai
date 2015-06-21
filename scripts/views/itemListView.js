
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

  var groupedCategories =
   _.each(this.collection.groupBy('category'), function(items, category){
     var foodCollection = new Backbone.Collection (items);
     var view = new FoodCategoryView({
       category: category,
       collection: foodCollection,
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
