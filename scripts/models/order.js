import {ItemListCollection} from './itemList';

var Order = Backbone.Model.extend({
  idAttribute: 'objectId',

  defaults: function() {
    return {
      item: '',
      price: 0,
      category:'',
      model: '',
    };
  },

  initialize: function(){
    //create item collection to track items for order
    this.order = new Backbone.Collection();

    //trigger item event on myself
    this.listenTo(this.order, 'all', this.trigger.bind(this));
  },

  //proxy the addOrder method to underlying item collection
  add: function( models, options){
    this.order.add(models,options);
  },
  //   return this.items.add(models, options);
  // },
  //
  // //proxy remove method to underlying item collection
  // remove: function(models, options){
  //   return this.items.remove(models, options);
  // },
  //
  // toJSON: function(){
  //     return _.extend({}, this.attributes, {
  //       items: this.items.map(function(item){
  //           return {
  //             "__type": "Pointer",
  //             "className": "Order",
  //             "objectId": item.id
  //           };
  //       })
  //     });
  //   }
  });
  console.log(Order);

  var OrderCollection = Backbone.Collection.extend({
    model: Order,
    url: "https://api.parse.com/1/classes/Order",
    parse: function(response){
      return response.results;
    }
  });

  export default Order;
