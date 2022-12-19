$(document).ready(function(){

    first = 1 
    second = 2

    function calculate(first,second){
        sum = first+second
        return sum 
    }

    $('#alert').click(function(){
        alert('this button has been clicked');

        sum = calculate(first,second)
        console.log(sum)

    });

});