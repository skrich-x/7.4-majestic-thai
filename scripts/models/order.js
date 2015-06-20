import{ItemListCollection} from './itemList';

export default Backbone.Model.extend({

  initialize: function(){
    //create item collection to track items for order
    this.items = new ItemListCollection();

    //trigger item event on myself
    this.listenTo(this.items, 'all', this.trigger.bind(this));
  },

  //proxy the addOrder method to underlying item collection
  add: function( models, options){
    return this.items.add(models, options);
  },

  //proxy remove method to underlying item collection
  remove: function(models, options){
    return this.items.remove(models, options);
  },

  toJSON: function(){

  }

});
