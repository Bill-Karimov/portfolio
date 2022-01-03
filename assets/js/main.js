/**
 * $(document).bind( 'mousewheel', function (e) { 
    var nt = $(document.body).scrollTop()-(e.deltaY*e.deltaFactor*100); 
    e.preventDefault(); 
    e.stopPropagation(); 
    $(document.body).stop().animate( { 
         scrollTop : nt 
     } , 500 , 'easeInOutCubic' );  
} )
 */

$(document).mousemove(function(e) {
     mouseCoords(e);

});

const cursor = $('#cursor');
const aura = $('#aura');
const links = $('a');

mouseX = 0, mouseY = 0, posX = 0, posY = 0;

function mouseCoords (e) {
     mouseX = e.pageX
     mouseY = e.pageY
}

gsap.to({}, .01, {
     repeat: -1,

     onRepeat: () => {

          posX += (mouseX - posX) / 5
          posY += (mouseY - posY) / 5

          gsap.set(cursor, {
               css: {
                    left: mouseX,
                    top: mouseY
               }
          });

          gsap.set(aura, {
               css: {
                    left: posX - 26,
                    top: posY - 26
               }
          });

     }
});
gsap.to(".star-icon", {
     opacity: 1,
     repeat: 2,
     duration: 1
});

gsap.to(".main-title", {
     y: "0%",
     duration: 0.5,
     delay: 3,
     opacity: 1
});

gsap.to(".animate", {
     y: "0%",
     duration: 0.5,
     delay: 3.4,
     opacity: 1,
     stagger: 0.25
});

$(document).ready(function($) {

     for (let i = 0; i < links.length; i++) {
          links[i].addEventListener('mouseover', () => {
               cursor.addClass('cursor-active');
               aura.addClass('cursor-active');
          });
     }
     for (let i = 0; i < links.length; i++) {
          links[i].addEventListener('mouseout', () => {
               cursor.removeClass('cursor-active');
               aura.removeClass('cursor-active');
          });
     }

     for (let i = 0; i < links.length; i++) {
          links[i].addEventListener('mouseover', () => {
               cursor.addClass('cursor-active');
          });
     }

     $('.skills').click(function() {
          $(this).addClass('active');
          $('.main-title').hide();
          $('.skills-group').delay().fadeIn();
     });

     $('.back-main').click(function() {
          $('.skills').removeClass('active');
          $('.skills-group').hide();
          $('.main-title').delay().fadeIn();
     })
});
