window.onload = function() {
    Particles.init({
      selector: '.background',
      color: '#cce6ff',
      maxParticles: 80,
      connectParticles: true,
			line_linked: {
				enable: false
			},
			move: {
				bounce: false,
				attract: {
					enable: false
				}
			},
			onhover: {
				enable: false
			},
      responsive: [
        {
          breakpoint: 1400,
          options: {
            maxParticles: 50
          }
        }, {
          breakpoint: 375,
          options: {
            maxParticles: 30
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
    // console.log(scrollpos);
});
