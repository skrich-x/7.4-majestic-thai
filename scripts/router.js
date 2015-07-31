import AjaxConfig from './ajax-config';

import MenuItem from './views/itemListView';
import {Item, ItemListCollection} from './models/itemList';

import Order from './models/order';
import OrderView from './views/orderView';

import {Categories} from './views/foodCategoryView';

var Router = Backbone.Router.extend({

    routes: {
      '': 'index',
      // 'administrator': 'administrator',
      // 'contact': 'user'
    },

    initialize: function(){
      this.order = new Order();
      // this.users = new UserCollection();
      this.item = new Item();
      this.itemList = new ItemListCollection();
      console.log('itemList');

      //
      // var order = new Order();
      // console.log('order',order);
      //
      // $('#orderTemplate').html(new OrderView({
      //   collection: order
      // }).el);
      //
      this.itemList.fetch().then(function(){
        var menuItem = new MenuItem({collection: this.itemList});
          // order: order,
          // collection:itemList
        $('#menuItemTemplate').html(menuItem.el);
      }.bind(this));

    },

    index: function(){

    },

    // index: function(){
    //   this.menu.fetch().then(function (data){
    //     this.menuView = new FoodCategoryView({collection:
    //           this.menu,
    //           order: this.order});
    //     $('')
    //
    // },

    // administrator: function(){
    //
    // },
    //
    // user: function(){
    //
    // }
});

var router = new Router();
export default router;
