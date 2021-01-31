import Masonry from "masonry-layout";
import $ from "jquery";
export default {
  init() {
    // JavaScript to be fired on all pages
    $('#open-menu').on('click',function(){
      $(this).next().addClass('open');
    });
    $('#close-menu').on('click',function(){
      $(this).parent().removeClass('open');
    });
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
