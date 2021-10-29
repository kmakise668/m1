$('.about-gallery').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    centerMode: true,
    speed: 2000,
    responsive: [{
            breakpoint: 767,
            settings: {
                dots: false,
                arrows: false,
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                dots: false,
                arrows: false,
                slidesToShow: 1,
            }
        }
  
    ]
  });
