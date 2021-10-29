function openPopup(popup, video){
    if(typeof(popup) == 'string'){
        popup = $('.popup.' + popup)
    }

    popup.stop().fadeIn(400)
}

function closePopup(popup){
    if(typeof(popup) == 'string'){
        popup = $('.popup.' + popup)
    }

    popup.stop().fadeOut(400)
}

$('.order-btn').click(function(){
    openPopup('order-popup')
})

$(document).on('click', '.close-popup', function(){
    var elem = $(this),
        popup = elem.parents('.popup'),
        btn = popup.find('.btn')

    closePopup(popup)
    btn.removeAttr('disabled')
})


$(document).on('click', '.close-image-popup', function(){
    $('.image-popup').fadeOut(300);
})

$(document).on('click', '.popup-img', function(){
    var elem = $(this),
        src = elem.attr('data-src');

    $('.image-popup').fadeIn(300).find('.image-wrapper').html('<img src="' + src + '">');
})