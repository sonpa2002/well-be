
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
      responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }
    ]
  });
});


$(document).ready(function(){
    $('.news__slick--carousel').on('init', function(event, slick){
        // Add custom content to each dot
        $('.slick-dots li').each(function(index){
            $(this).find('button').html('<span class="custom-dot"></span>');
        });
    });
  
    $('.news__slick--carousel').slick({
        slidesToShow: 3,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    });
  });
  
  
  $(document).ready(function(){
    $('.partner__slick--component').on('init', function(event, slick){
        // Add custom content to each dot
        $('.slick-dots li').each(function(index){
            $(this).find('button').html('<span class="custom-dot"></span>');
        });
    });
  
    $('.partner__slick--component').slick({
        slidesToShow: 6,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
        ]
    });
  });


  fireSlider(0.4, 1.00, ["F"], "Default");
  