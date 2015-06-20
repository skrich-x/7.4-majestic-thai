import AjaxConfig from './ajax-config';

import MenuItem from './views/itemListView';
import {Item, ItemListCollection} from './models/itemList';
import {Order, OrderCollection} from './models/order';

(function(){
  'use strict';

  $(document).ready(function(){
    Backbone.history.start();
    $('#orderTemplate').html(JST.order());


    var itemList = new ItemListCollection();
    console.log(itemList);
    itemList.fetch().then(function(){
      var menuItem = new MenuItem({collection: itemList});
      $('#menuItemTemplate').html(menuItem.el);
      }, console.error.bind(console));
      console.log('afterFetch');

    });
  })();
