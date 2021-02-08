$(document).ready(function() {

    // set an element
    $("#curdateinput").val( moment().format('MM DD, YYYY') );

    // set a variable
    var today = moment().format('D MMM, YYYY');

    $("input[name$='application']").click(function(){
        var radio_value = $(this).val();
        if(radio_value == 'false'){
            $(".application").show();
            $(".submittedApplication").hide();
        } else if(radio_value == 'true'){
            $(".application").hide();
            $(".submittedApplication").show();
        }


    });

    $(".addChoice").on("click", function(){
        $(".jobChoice1").show();
        $(".addChoice").hide();
        $(".addChoice2").show();
    });

    $(".addChoice2").on("click", function(){
        $(".jobChoice2").show();
        $(".addChoice2").hide();
    });
    $("#addEmployer2").on("click", function(){
       $("#employer2Section").show();
       $("#addEmployer2").hide();
       $("#addEmployer3").show();
    });
    $("#addEmployer3").on("click", function(){
       $("#employer3Section").show();
       $("#addEmployer3").hide();
    });
    $("#addEducation1").on("click", function(){
       $(".education2").show();
       $("#addEducation2").show();
       $("#addEducation1").hide();
    });
    $("#addEducation2").on("click", function(){
        $(".education3").show();
        $("#addEducation2").hide();
    });

    $("input[name$='dLCheck']").click(function(){
        var radio_value = $(this).val();
        if(radio_value == 'false'){
            $(".driverLicenseTrue").hide();
        } else if(radio_value == 'true'){
            $(".driverLicenseTrue").show();

        }
    });

    $("input[name$='convicted']").click(function(){
        var radio_value = $(this).val();
        if(radio_value == 'false'){
            $(".convictedYes").hide();
        } else if(radio_value == 'true'){
            $(".convictedYes").show();

        }
    });

    $("input[name$='workedPrev']").click(function(){
       var radio_value = $(this).val();
        if(radio_value == 'false'){
            $(".workedPrevYes").hide();
        } else if(radio_value == 'true'){
            $(".workedPrevYes").show();

        }
    });
    $("input[name$='employedDifName']").click(function(){
        var radio_value = $(this).val();
        if(radio_value == 'false'){
            $(".employedDifName").hide();
        } else if(radio_value == 'true'){
            $(".employedDifName").show();

        }
    });

    $("input[name$='spouseWork']").click(function(){
        var radio_value = $(this).val();
        if(radio_value == 'false'){
            $(".spouseCurEmployee").hide();
        } else if(radio_value == 'true'){
            $(".spouseCurEmployee").show();

        }
    });
    $("input[name$='above18']").click(function(){
        var radio_value = $(this).val();
        if(radio_value == 'false'){
            $(".above18").hide();
        } else if(radio_value == 'true'){
            $(".above18").show();

        }
    });

});