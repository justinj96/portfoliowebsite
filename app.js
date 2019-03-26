window.onload = function() {
    Particles.init({
      selector: '.background',
      color: '#cce6ff',
      maxParticles: 80,
      connectParticles: true,
	  retina_detect: true,
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
          breakpoint: 464,
          options: {
            maxParticles: 0
          }
        }, {
          breakpoint: 375,
          options: {
            maxParticles: 0
          }
        }
      ]
    });
  };


var scrollpos = window.scrollY;
var header = document.getElementById("nav");

window.addEventListener('scroll', function(){ 
    scrollpos = window.scrollY;

    if(scrollpos > 659){
        header.classList.toggle("navbar-toggle", true);
    }
    else {
        header.classList.toggle("navbar-toggle", false);
    }
});
