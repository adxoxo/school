
$(document).ready(function(){
      
    $('div.band').hide();
    $('div.picture.nothree').show();

    $('#FormControlSelect1').on('change', function(){
        var bvalue = $(this).val();
        $('div.band, img.picture').hide();
        $('div.band.no' + bvalue).show();
        $('img.picture.no' + bvalue).show();
    });

    function Calculate(first, second, multiplier){
        resistor = (first+second)*multiplier
        return resistor         
    };

    $('#calculate').click(function(){

        var first = $('#first-band').val();

        var second = $('#second-band').val();

        var multiplier = $('#multiplier').val();

        testband = Calculate(first,second,multiplier);

        $('#resistorvalue').text(testband);

        console.log(testband);
    });

});