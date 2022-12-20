$(document).ready(function(){

    var l1 = 0
    var l2 = 0
    var l3 = 0
    var l4 = 0
    var l5 = 0
    var gender = ("")

    $('#lettergrade1').on('change', function(){
        l1 = $(this).val();
    });
    $('#lettergrade2').on('change', function(){
        l2 = $(this).val();
    });
    $('#lettergrade3').on('change', function(){
        l3 = $(this).val();
    });
    $('#lettergrade4').on('change', function(){
        l4 = $(this).val();
    });
    $('#lettergrade5').on('change', function(){
        l5 = $(this).val();
    });

    $('#gender').on('change', function(){
        gender = $(this).val();
    })
    function QPI(l1,l2,l3,l4,l5,u1,u2,u3,u4,u5){

        var m1 = l1*u1
        var m2 = l2*u2 
        var m3 = l3*u3
        var m4 = l4*u4
        var m5 = l5*u5

        var sumeq = m1+m2+m3+m4+m5
        var sumun = u1+u2+u3+u4+u5

        var totalqpi = sumeq/sumun
        return totalqpi
    };

    $('#calculate').click(function(){
        var name = $('#name').val();
        var course = $('#course').val();
        var s1 = $('#subject1').val();
        var s2 = $('#subject2').val();
        var s3 = $('#subject3').val();
        var s4 = $('#subject4').val();
        var s5 = $('#subject5').val();
        
        var u1 = parseInt($('#units1').val());
        var u2 = parseInt($('#units2').val());
        var u3 = parseInt($('#units3').val());
        var u4 = parseInt($('#units4').val());
        var u5 = parseInt($('#units5').val());

        totalqpi = QPI(l1,l2,l3,l4,l5,u1,u2,u3,u4,u5);

        alert(
            "Name: " + name +
            "\nCourse: " + course +
            "\nGender: " + gender +
            "\nSubject: " + s1 +
            "\nSubject: " + s2 +
            "\nSubject:" + s3 +
            "\nSubject: " + s4 +
            "\nSubject: " + s5 +
            "\nLetterGrade: " + l1 +
            "\nLetterGrade: " + l2 +
            "\nLetterGrade: " + l3 +
            "\nLetterGrade: " + l4 +
            "\nLetterGrade: " + l5 +
            "\nUnits: " + u1 +
            "\nUnits: " + u2 +
            "\nUnits: " + u3 +
            "\nUnits: " + u4 +
            "\nUnits: " + u5 +
            "\ntotalQPI: " + totalqpi
        );

    })

})