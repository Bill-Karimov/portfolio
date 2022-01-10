$(document).mousemove(function(e) {
          mouseCoords(e);
});

const cursor = $('#cursor');
const aura = $('#aura');
const links = $('.nav');

const imgHover = $('.img-hover');
const caseTitle = $('.case-title');
const imgHeight = $('').css('height')
const img = $('.portfolio-container img');

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
                         left: mouseX - 430,
                         top: mouseY - 255
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
     delay: 3.4,
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

     for (let i = 0; i < img.length; i++) {
          img[i].addEventListener('mouseover', () => {
               cursor.addClass('cursor-white');
               aura.addClass('cursor-white');
          });
     }

     for (let i = 0; i < img.length; i++) {
          img[i].addEventListener('mouseout', () => {
               cursor.removeClass('cursor-white');
               aura.removeClass('cursor-white');
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

     function addSpinningLine() {
          $(".loading-animate").addClass("btn-loading");
          $(".loading-animate").prop("disabled", true);
     }

     function removeSpinningLine() {
          $(".loading-animate").removeClass("btn-loading");
          $(".loading-animate").prop("disabled", false);
     }

     $('.btn').click(function () {
          var form = $('#form');
          var name = $('input[name="name"]');
          var email = $('input[name="email"]');
          var msg = $('textarea[name="msg"]');

          $(this).attr('disabled');
          name.removeClass('err'); 
          email.removeClass('err'); 
          msg.removeClass('err');

          addSpinningLine();
          
          if (name.val() == null || name.val() == "") {
               name.addClass('err');
               $('.alert-msg').html('Please fill in all required fields');
               removeSpinningLine();
               return false;
          }

          if (email.val() == null || email.val() == "") {
               email.addClass('err');
               $('.alert-msg').html('Please fill in all required fields');
               removeSpinningLine();
               return false;
          }

          if (msg.val() == null || msg.val() == "") {
               msg.addClass('err');
               $('.alert-msg').html('Please fill in all required fields');
               removeSpinningLine();
               return false;
          }

          $.ajax({
               type: "POST",
               url: "sendMail.php",
               data: form.serialize()
          }).done(function () {
               removeSpinningLine()
               $('.success-msg').html('Sent successfully');
               location.reload();
          });
     });
});
