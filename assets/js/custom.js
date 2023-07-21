// add class on header js
    $(window).scroll(function() {
      var scrl = $(window).scrollTop();
      if (scrl < 60) {
        $('header').removeClass('fixedbar');
      } else {
        $('header').addClass('fixedbar');
      }
    });
// add class on header js

  // progressBar js
    window.onscroll = function() {
      updateProgressBar();
    };

    function updateProgressBar() {
      const progressBar = document.getElementById("scroll-progress");
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      progressBar.style.width = progress + "%";
    }
  // progressBar js



//    cursor js
    const lerp = (a, b, n) => (1 - n) * a + n * b;
    class Cursor {
      constructor() {
        // config
        this.target = {
          x: 0.5,
          y: 0.5
        }; // mouse position
        this.cursor = {
          x: 0.5,
          y: 0.5
        }; // cursor position
        this.speed = 0.2;
        this.init();
      }
      bindAll() {
        ["onMouseMove", "render"].forEach((fn) => (this[fn] = this[fn].bind(this)));
      }
      onMouseMove(e) {
        //get normalized mouse coordinates [0, 1]
        this.target.x = e.clientX / window.innerWidth;
        this.target.y = e.clientY / window.innerHeight;
        // trigger loop if no loop is active
        if (!this.raf) this.raf = requestAnimationFrame(this.render);
      }
      render() {
        //calculate lerped values
        this.cursor.x = lerp(this.cursor.x, this.target.x, this.speed);
        this.cursor.y = lerp(this.cursor.y, this.target.y, this.speed);
        document.documentElement.style.setProperty("--cursor-x", this.cursor.x);
        document.documentElement.style.setProperty("--cursor-y", this.cursor.y);
        //cancel loop if mouse stops moving
        const delta = Math.sqrt(Math.pow(this.target.x - this.cursor.x, 2) + Math.pow(this.target.y - this.cursor.y, 2));
        if (delta < 0.001) {
          cancelAnimationFrame(this.raf);
          this.raf = null;
          return;
        }
        //or continue looping if mouse is moving
        this.raf = requestAnimationFrame(this.render);
      }
      init() {
        this.bindAll();
        window.addEventListener("mousemove", this.onMouseMove);
        this.raf = requestAnimationFrame(this.render);
      }
    }
    new Cursor();


    
//    cursor js

//    menu js
    $('.rightheadre').on('click', function() {
      $('.rightheadre').toggleClass('open');
      $('body').toggleClass('openmenu');
    });

//    menu js    



// lightbox images
$(document).ready(function(){

	$('.gallery > div.bg').each(function(){
		$(this).wrapAll('<a href="" data-fancybox="gallery"></a>');
	});

	$('.gallery a').each(function(){
		var link = $(this).children('.bg').css('background-image');
		console.log(link);
		link = link.replace(/(url\(|\)|")/g,'');
		$(this).attr('href', link);
	});

	$("[data-fancybox]").fancybox({
		loop: true,
		buttons: [
	        "zoom",
	        "share",
	        "slideShow",
	        "fullScreen",
	        "download",
	        "thumbs",
	        "close"
	    ]		
	});

});
// lightbox images



