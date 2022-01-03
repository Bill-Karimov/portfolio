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
     $(document).ready(function($) {
          console.log('a');
     });
     var cursor = $('#cursor');
     $(document).bind('mousemove', function(event) {

          var x = e.clientX;
          var y = e.clientY;
          console.log(x);
          cursor.style.left = x + 'px';
          cursor.style.left = y + 'px';
     });
          