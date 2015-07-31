import ItemView from './itemView';

export default Backbone.View.extend({
  template: JST.foodCategory,

  tagName: 'div',
  className: 'foodCategory',

  events: {
    'click .showCategoryDetail': 'toggleCategory'
  },


  initialize: function(options){
    this.category = options.category;
    this.order = options.order;
    this.render(options);
  },

  render: function(options){
    this.$el.html(this.template({category: this.category}));
    this.renderChildren(options);
  },


  toggleCategory: function(e) {
  $(this.el).closest('.foodCategory').find('.itemList').slideToggle(375, function(){});
  },


  //creates children views
  renderChildren: function(options){
    _.invoke(this.children || [], 'remove');

    this.order = options.order;

    this.children = this.collection.map((child) => {
      var view = new ItemView({
        model: child,
        collection: this.collection,
        order:this.order
      });


      this.$('.itemList').append(view.el);
      return view;
    }.bind(this));

    return this;

  },

    remove: function(){
      _.invoke(this.children || [], 'remove');
      Backbone.View.prototype.remove.apply(this.arguments);
    }


  });
