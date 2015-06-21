import ItemView from './itemView';

export default Backbone.View.extend({
  template: JST.foodCategory,

  tagName: 'div',
  className: 'foodCategory',
  // hidden: true,

  events: {

  },

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
      var view = new ItemView({
        model: child,
        collection: this.collection
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
