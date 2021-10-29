var loader = '<div class="loading-layer"> <div class="ll-content"><span></span></div> </div>'
var small_loader = '<div class="loading-layer small"> <div class="ll-content"> <span></span> </div> </div>'

$('.paste-loading').prepend(loader)
$('.paste-small-loading').prepend(small_loader)



  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault()
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top - $('header.site-header').height()
    $('html, body').animate({scrollTop: dn}, 700)
})



