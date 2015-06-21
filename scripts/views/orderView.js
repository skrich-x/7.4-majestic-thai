// import {Order} from './orderView';
//
// export default Backbone.View.extend({
//   template: JST.order,
//   className: 'order',
//
//   events: {
//     'click .order': 'addedItemOrder'
//   },
//
//   initialize: function(){
//     this.render();
//     this.listenTo(this.collection, 'add remove', this.addedItemOrder);
//     this.listenTo(this.collection, 'add remove', this.render);
//   },
//
//   render: function(){
//     this.$el.html(this.template(this.collection.toJSON()));
//   },
//
//   addedItemOrder: function(){
//     this.collection.save();
//     console.log(addedItemOrder);
//   }
//
// });
