
$(document).ready(function(){
      
    $('div.band').hide();
    $('div.picture.nothree').show();

    $('#FormControlSelect1').on('change', function(){
        var bvalue = $(this).val();
        $('div.band, img.picture').hide();
        $('div.band.no' + bvalue).show();
        $('img.picture.no' + bvalue).show();

        $('#first-band').prop('selectedIndex',0);
        $('#second-band').prop('selectedIndex',0);
        $('#third-band').prop('selectedIndex',0);
        $('#multiplier').prop('selectedIndex',0);

    });

    function Calculate(first, second, third, multiplier){
        resistor = (first+second+third)*multiplier
        return resistor
    };

    $('#calculate').click(function(){
 
        var first = $('#first-band').val();

        var second = $('#second-band').val();

        var third = $('#third-band').val();

        var multiplier = $('#multiplier').val();

        testband = Calculate(first, second, third, multiplier);

        $('#resistorvalue').text(testband);

        console.log(testband);

        $(third).val("#");
        
    });

});