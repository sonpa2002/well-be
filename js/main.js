
// add active button
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.section__btndiv .Button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// carousel

$(document).ready(function(){
  $('.slick__carousel').on('init', function(event, slick){
      // Add custom content to each dot
      $('.slick-dots li').each(function(index){
          $(this).find('button').html('<span class="custom-dot"></span>');
      });
  });

  $('.slick__carousel').slick({
      slidesToShow: 4,
      dots: true,
      arrows: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
  });
});

