import AjaxConfig from './ajax-config';

import MenuItem from './views/itemListView';
import {Item, ItemListCollection} from './models/itemList';

import Order from './models/order';
import OrderView from './views/orderView';

import {FoodCategoryView} from './views/foodCategoryView';

var Router = Backbone.Router.extend({

    routes: {
      '': 'index',
      'administrator': 'administrator',
      'contact': 'user'
    },

    initialize: function(){
      this.order = new Order();
      this.users = new UserCollection();
      this.menu = new ItemListCollection();

    },

    index: function(){
      this.menu.fetch().then(function (data){
        this.menuView = new FoodCategoryView({collection: this.menu,

        $('.debugger')})
      })

    },

    administrator: function(){

    },

    user: function(){

    }
});

var router = new Router();
export default router;
