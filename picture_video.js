jQuery(document).ready(function(){
    $('img').click(function(){
    video = '<iframe src="'+ $(this).attr('video') +'"></iframe>';
    $(this).parent().addClass('active');
    $(this).replaceWith(video);});
});