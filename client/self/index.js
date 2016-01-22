var core = require('@gautamarora/core');
var $ = core.$;
var bootstrap = core.bootstrap;
var globalBus = core.globalBus;
var localBus = require('../../utils/local-bus');

module.exports.init = function() {
  if(!window.microapps.photo) return false;
  console.log('photo self init');
  $(function() {
    globalBus.trigger("photo-count", {"count": $(".photo .thumbnail img[data-seen=false]").length});
    //photo modal
    $(".thumbnail img").on("click", function() {
     $('#imagepreview').attr('src', $(this).attr('src'));
     $('#imagelabel').text($(this).attr('alt'));
     $('#imagemodal').modal('show');
     $(this).attr('data-seen', true);
     globalBus.trigger("photo-count", {"count": $(".photo .thumbnail img[data-seen=false]").length});
  });
});
};