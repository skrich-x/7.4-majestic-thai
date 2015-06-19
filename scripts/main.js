(function(){
  'use strict';

  $(document).ready(function(){
    $('#menuItemTemplate').prepend(JST.menuItems());
    $('#orderTemplate').html(JST.order());

  });
})();
