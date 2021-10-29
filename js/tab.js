$('.tab-trigger').click(function() {
    var id = $(this).attr('data-tab'),
        content = $('.tab-content[data-tab="'+ id +'"]');
        paste_loading = $('.paste-loading');
        
        paste_loading.addClass('loading'); 
    
    setTimeout(() => {
        paste_loading.removeClass('loading'); 
    }, 300);
    

    $('.tab-trigger.active').removeClass('active'); 
    $(this).addClass('active'); 
    
    $('.tab-content.active').removeClass('active'); 
    content.addClass('active'); 
 });
 