import AjaxConfig from './ajax-config';

import MenuItem from './views/itemListView';
import {Item, ItemListCollection} from './models/itemList';

import Order from './models/order';
import OrderView from './views/orderView';

import {Categories} from './views/foodCategoryView';

(function(){
  'use strict';

  $(document).ready(function(){
    // Backbone.history.start();
    $('#orderTemplate').html(JST.order());

    // var category = new Categories();
    // console.log('category', category);

    var itemList = new ItemListCollection();
    console.log('itemList', itemList);

    var order = new Order();
    console.log('order',order);

    itemList.fetch().then(function(){
      // var menuItem = new MenuItem({collection: itemList});
      var menuItem = new MenuItem({
        order: order,
        collection:itemList
      });
      $('#menuItemTemplate').html(menuItem.el);
    //   console.error.bind(console));
    });

  });
  })();

//     Handlebars.registerHelper("debug", function(optionalValue) {
//   console.log("Current Context");
//   console.log("====================");
//   console.log(this);
//
//   if (optionalValue) {
//     console.log("Value");
//     console.log("====================");
//     console.log(optionalValue);
//   }
// });
