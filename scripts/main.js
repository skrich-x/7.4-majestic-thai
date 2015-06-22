import AjaxConfig from './ajax-config';

import MenuItem from './views/itemListView';
import {Item, ItemListCollection} from './models/itemList';

import Order from './models/order';
import OrderView from './views/orderView';

import {Categories} from './views/foodCategoryView';

(function(){
  'use strict';

  $(document).ready(function(){

    var itemList = new ItemListCollection();
    console.log('itemList', itemList);

    var order = new Order();
    console.log('order',order);

    $('#orderTemplate').html(new OrderView({
      collection: order
    }).el);

    itemList.fetch().then(function(){
      var menuItem = new MenuItem({
        order: order,
        collection:itemList
      });
      $('#menuItemTemplate').html(menuItem.el);
    //   console.error.bind(console));
    });

  });
  })();
