(function($) {
    $.QueryString = (function(a) {
        if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i)
        {
            var p=a[i].split('=');
            if (p.length != 2) continue;
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    })(window.location.search.substr(1).split('&'));

$("#add").click(function(){
    checknums();
   $("#num3").val(comfn($("#num1").val()*1,$("#num2").val()*1,"+"));
});

$("#sub").click(function(){
    checknums();
   $("#num3").val(comfn($("#num1").val()*1,$("#num2").val()*1,"-"));
});

$("#multi").click(function(){
    checknums();
   $("#num3").val(comfn($("#num1").val()*1,$("#num2").val()*1,"*"));
});

$("#divide").click(function(){
    checknums();
   $("#num3").val(comfn($("#num1").val()*1,$("#num2").val()*1,"/"));
});

})(jQuery);
 
var param = jQuery.QueryString["un"];
$("#namespace").html("Logged in user: "+param);

function validateNum(nam,err,idval)
{
    var uname = $("#"+idval).val();
    //var re = /^[0-9]/;
    var re = /^\d*\.?\d*$/;
    if(uname !== ''){
        if (!isFinite(uname))
        {
            $("#"+err).addClass("errorClass").removeClass("noerrorClass");
            $("#"+err).html("Infinite numbers are not allowed");
            return false;
        }
        if(!re.test(uname)){
            $("#"+err).addClass("errorClass").removeClass("noerrorClass");
            $("#"+err).html("Only numbers are allowed");
            return false;
            
        }
        
        $("#"+err).addClass("noerrorClass").removeClass("errorClass");
    }
    else{
         $("#"+err).addClass("errorClass").removeClass("noerrorClass");
         $("#"+err).html(nam+ " is required");
         return false;
    }
}
let comfn = (a, b, op) => (op == "+")? a + b:((op == "-")? a - b:((op == "*")? a * b:((op == "/")? a / b:0)));



function checknums()
{
    var num1 = $("#num1").val();
    var num2 = $("#num2").val();
    if(num1 != null && num2 != null){
        return true;
    }
    return false;

}

var storedValue = localStorage.getItem("username");
if (storedValue) {
    $("#namespace").text("Logged in user : " + storedValue);
  } else {
    $("#namespace").text("No value stored.");
  }