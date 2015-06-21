import ItemView from './itemView';

export default Backbone.View.extend({
  template: JST.foodCategory,

  tagName: 'div',
  className: 'foodCategory',
  // hidden: true,

  events: {
    'click .showCategoryDetail': 'toggleCategory'

  },


  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template({category: this.category}));
    this.renderChildren();
  },
toggleCategory: function(e) {
  $('.itemList').slideToggle(450, function() {});

},

  //creates children views
  renderChildren: function(){
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.map((child) => {
      var view = new ItemView({
        model: child,
        category: this.category
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
