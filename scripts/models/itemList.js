var Item = Backbone.Model.extend({
  idAttribute: 'objectId',

});

var ItemListCollection = Backbone.Collection.extend({
    model: Item,
    url: "https://api.parse.com/1/classes/ThaiItems",

// The Parse API returns models under "results".
  parse: function(response) {
    return response.results;
 }
});
console.log('itemlistJS');

export default {Item, ItemListCollection};
