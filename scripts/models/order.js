import{ItemListCollection} from './itemList';

var Order = Backbone.Model.extend({
  idAttribute: 'objectId',

  defaults: {
    item:''
  },

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
      return _.extend({}, this.attributes, {
        items: this.items.map(function(item){
            return {
              "__type": "Pointer",
              "className": "Order",
              "objectId": item.id
            };
        })
      });
    }

  });

  var OrderCollection = Backbone.Collection.extend({
    model: Order,
    url: "https://api.parse.com/1/classes/Order"
  });

  export default {Order, OrderCollection};
