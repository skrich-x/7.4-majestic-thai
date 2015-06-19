import MenuItem from './views/itemListView';
import {Item, ItemListCollection} from './models/itemList';

(function(){
  'use strict';

  $(document).ready(function(){
    // Backbone.history.start();
    $('#orderTemplate').html(JST.order());
    console.log("inDocReady");

    var itemList = new ItemListCollection();

    itemList.fetch().then(function(){
      var menuItem = new MenuItem({collection: itemList});
      $('#menuItemTemplate').html(menuItem.el);
      }, console.error.bind(console));
    });
  })();
