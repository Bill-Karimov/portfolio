$(document).mousemove(function(e) {
          mouseCoords(e);
});

const cursor = $('#cursor');
const aura = $('#aura');
const links = $('.nav');

const imgHover = $('.img-hover');
const caseTitle = $('.case-title');
const imgHeight = $('').css('height')

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
                    left: posX - 25,
                    top: posY - 25
               }
          });

          if (window.innerWidth >= 1024) {
               gsap.set(imgHover, {
                    css: {
                         left: mouseX - 200,
                         top: mouseY - 120 
                    }
               });
          }
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
gsap.to(".portfolio-group, .skills-group, .contact-group", {
     y: "0%",
     duration: 0.5,
     delay: 3.0,
     opacity: 1,
     stagger: 0.4
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

     function removeActive() {
          var nav = $('.nav-group').find('p');
          if (nav.hasClass('active')) {
               nav.removeClass('active');
          }
     }
     if (window.innerWidth >= 1024) {
          caseTitle.on('change mouseover', function() {
               var imgId = $(this).attr('id');
               $('#img-' + imgId).show();
          });
          caseTitle.on('change mouseout', function() {
               var imgId = $(this).attr('id');
               $('#img-' + imgId).hide();
          });
     }

     $('.portfolio').click(function() {
          removeActive();
          $(this).addClass('active');
          $('.main-title, .skills-group, .contact-group').hide();
          $('.portfolio-group').delay().fadeIn();
     });

     $('.skills').click(function() {
          removeActive();
          $(this).addClass('active');
          $('.main-title, .portfolio-group, .contact-group').hide();
          $('.skills-group').delay().fadeIn();
     });

     $('.contact').click(function() {
          removeActive();
          $(this).addClass('active');
          $('.main-title, .portfolio-group, .skills-group').hide();
          $('.contact-group').delay().fadeIn();
     });

     $('.back-main').click(function() {
          removeActive();
          $('.skills').removeClass('active');
          $('.portfolio-group, .skills-group, .contact-group').hide();
          $('.main-title').delay().fadeIn();
     });
});
