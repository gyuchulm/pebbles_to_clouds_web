 // reference - owl carousel2 docs
 // 1. https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html,  
 // 2. https://owlcarousel2.github.io/OwlCarousel2/demos/events.html

 var owl = $(".owl-1")
 owl.on('changed.owl.carousel', function (carousel_event) {
     const pindex = carousel_event.page.index; //get page index from carousel
     let modelSelect = document.getElementById("model");
     const len = modelSelect.options.length;
     
     for (let i=0; i<len; i++){
         if(i == pindex){
             modelSelect.options[i].selected = true;
         }
     }
 })
 
 
 owl.owlCarousel({
     loop:true,
     margin:0,
     nav:true,
     items: 1,
     smartSpeed: 1000,
     autoplay: false,
     pauseOnHover: false,
     navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
 })