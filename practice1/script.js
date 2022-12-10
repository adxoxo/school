$(document).ready(function(){
    
    $('div.band').hide();
    $('div.picture.nothree').show();

    $('#FormControlSelect1').on('change', function(){
        var bvalue = $(this).val();
        $('div.band, img.picture').hide();
        $('div.band.no' + bvalue).show();
        $('img.picture.no' + bvalue).show();
    })
})