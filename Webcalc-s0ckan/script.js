var add = (function (number, newnumber){
    total = number + newnumber;
    return total
});

var sub = (function (number, newnumber){
    total = newnumber - number;
    return total
});

var mul = (function (number, newnumber){
    total = newnumber * number;
    return total
});

var div = (function (number, newnumber){
    total = newnumber / number;
    return total
});

$(document).ready(function(){

    var number = "";
    var newnumber = "";
    var operator = "";
    var total = $("#total").text("0");
    var maxlength = function(number){
        if (number.length > 10){
            console.log(this, "maxlength")
            $("#total").text("Error")
        }
    }

    $("#numbers button").click(function(){
        console.log(this, "number clicked");
        number += $(this).text();
        $("#total").text(number);
        maxlength(number)
    });

    $("#operators button").not("#equals, #clear").click(function(){
        console.log(this, "operator clicked");
        operator = $(this).text();
        newnumber = number;
        number = "";
        console.log(number + newnumber)
        $("#total").text(operator);
    });

    $("#clear").click(function(){
        console.log(this, "clear clicked");
        $("#total").text("0");
        number = "";
    });

    $("#equals").click(function(){
        console.log(this, "equal clicked");
        if (operator == "+"){
            total = $("#total").text(add(parseFloat(number), parseFloat(newnumber)).toFixed(2));
        }
        else if (operator == "-"){
            $("#total").text(sub(parseFloat(number), parseFloat(newnumber)).toFixed(2));
        }
        else if (operator == "*"){
            $("#total").text(mul(parseFloat(number), parseFloat(newnumber)).toFixed(2));
        }
        else if (operator == "/"){
            total = $("#total").text(div(parseFloat(number), parseFloat(newnumber)).toFixed(2));
        }
    });
});
