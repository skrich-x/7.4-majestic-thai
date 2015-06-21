import AjaxConfig from './ajax-config';

import MenuItem from './views/itemListView';
import {Item, ItemListCollection} from './models/itemList';

import {Order, OrderCollection} from './models/order';
// import OrderView from './views/orderView';

import {Categories} from './views/foodCategoryView';

(function(){
  'use strict';

  $(document).ready(function(){
    Backbone.history.start();
    $('#orderTemplate').html(JST.order());

      $(document).on('click', '.foodCategory',
      function() {
      $(this).siblings('.itemList').slideToggle();
      $(this).children('.itemList').slideToggle();
    });



    // var category = new Categories();
    // console.log('category', category);

    var itemList = new ItemListCollection();
    console.log('itemList', itemList);

    var orderCollection = new OrderCollection();
    console.log('order',orderCollection);

    itemList.fetch().then(function(){
      var menuItem = new MenuItem({collection: itemList});
      $('#menuItemTemplate').html(menuItem.el);
      }, console.error.bind(console));
      console.log('afterFetch');

    });
  })();
