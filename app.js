window.onload = function() {
    Particles.init({
      selector: '.background',
      color: '#cce6ff',
      maxParticles: 130,
      connectParticles: true,
      responsive: [
        {
          breakpoint: 768,
          options: {
            maxParticles: 80
          }
        }, {
          breakpoint: 375,
          options: {
            maxParticles: 50
          }
        }
      ]
    });
  };


//use window.scrollY
var scrollpos = window.scrollY;
var header = document.getElementById("nav");

function add_class_on_scroll() {
    header.classList.add("navbar-toggle");
}

function remove_class_on_scroll() {
    header.classList.remove("navbar-toggle");
}

window.addEventListener('scroll', function(){ 
    //Here you forgot to update the value
    scrollpos = window.scrollY;

    if(scrollpos > 659){
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
    console.log(scrollpos);
});