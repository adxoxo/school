
$(document).ready(function(){
      
    $('div.band').hide();
    $('div.picture.nothree').show();

    var bvalue = 0

    $('#FormControlSelect1').on('change', function(){
        bvalue = $(this).val();
        $('div.band, img.picture').hide();
        $('div.band.no' + bvalue).show();
        $('img.picture.no' + bvalue).show();

        $('#first-band').prop('selectedIndex',0);
        $('#second-band').prop('selectedIndex',0);
        $('#third-band').prop('selectedIndex',0);
        $('#multiplier').prop('selectedIndex',0);
        $('#resistorvalue').empty();
        $('#tolerancevalue').empty();
        $('#temperaturevalue').empty();

    });

    function Calculate(first, second, third, multiplier){

        if (bvalue <=4){
            resistor = (first+second)*multiplier
            return resistor   
        } 
        
        else {
            resistor = (first+second+third)*multiplier
            return resistor       
        }
    };

    $('#calculate').click(function(){
 
        var first = $('#first-band').val();

        var second = $('#second-band').val();

        var third = $('#third-band').val();

        var multiplier = $('#multiplier').val();

        var tolerance = $('#tolerance').val();

        var temperature = $('#temperature').val();

        calculated = Calculate(first, second, third, multiplier,tolerance,temperature).toExponential();

        $('#resistorvalue').text("Resistor: " + calculated + " ohms");
        $('#tolerancevalue').text("Tolerance: " + tolerance);
        $('#temperaturevalue').text("Temperature Coefficient: " + temperature);


        console.log(calculated);
        
    });

});