 // reference - owl carousel2 docs
 // 1. https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html,  
 // 2. https://owlcarousel2.github.io/OwlCarousel2/demos/events.html

function callback(carousel_event) {
    let cindex = carousel_event.item.index; //get item index from carousel
    let pindex = carousel_event.page.index; //get page index from carousel
    let num_items = carousel_event.page.count;
    let current_model_text = document.getElementById("current_model");
    current_model_text.textContent="current item index:"+ cindex+" current page index:" + pindex;
  }
  

$(function() {

 
    $('.owl-1').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items: 1,
        smartSpeed: 1000,
        autoplay: false,
        pauseOnHover: false,
        navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">'],
        onChange: callback
    });
})
