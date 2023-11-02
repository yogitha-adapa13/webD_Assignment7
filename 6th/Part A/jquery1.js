$(document).ready(function()
{
    $("#submit").attr('disabled',true);
  $("#loginform").submit(function(){
    var uname = $("#username").val();
    localStorage.setItem("username",uname);
    $("#loginform").attr("action","calc.html?un="+uname);
  });
});


   
emailcheck = false;
unamecheck = false;
passcheck = false;
cpasscheck = false;
function validateEmail(str){
    var emailId = $("#emailId").val();
    var re=/^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;
    if (emailId  == '')
    {
        emailcheck = false;
        $("#emailError").addClass("errorClass").removeClass("noerrorClass");
        $("#emailError").html("Email Id is required");
        return false;
    }
    else
    {

        if(re.test(emailId)){
            emailcheck = true;
            $("#emailError").addClass("noerrorClass").removeClass("errorClass");
            checksubmit();
        }
        else{
            emailcheck = false;
            $("#emailError").addClass("errorClass").removeClass("noerrorClass");
            $("#emailError").html("Domain is not valid");
            checksubmit();
            return false;
        }
    }
}
function validateName(str,err,idval){
    var uname = $("#"+idval).val(); 
    var re = /^[a-zA-Z0-9]+$/;
    if(uname !== ''){
        if(uname.length<3 || uname.length>20){
             if (idval == 'username')
                namecheck = false;
            if (idval == 'pswd')
                passcheck = false;
             if (idval == 'cpswd')
                cpasscheck = false;
            $("#"+err).addClass("errorClass").removeClass("noerrorClass");
            $("#"+err).html("Length should be between 3 and 20 characters");
            checksubmit();
            return false;
        }
        if(!re.test(uname)){
            if (idval == 'username')
                namecheck = false;
            if (idval == 'pswd')
                passcheck = false;
             if (idval == 'cpswd')
                cpasscheck = false;
            $("#"+err).addClass("errorClass").removeClass("noerrorClass");
            $("#"+err).html("Special characters are not allowed");
            checksubmit();
            return false;
            
        }
        
        if (idval == 'username')
            unamecheck = true;
        if (idval == 'pswd')
            passcheck = true;
         if (idval == 'cpswd')
            cpasscheck = true;
        
        $("#"+err).addClass("noerrorClass").removeClass("errorClass");
        
        checksubmit();
    }
    else{
         if (idval == 'username')
            namecheck = false;
        if (idval == 'pswd')
            passcheck = false;
         if (idval == 'cpswd')
            cpasscheck = false;
        $("#"+err).addClass("noerrorClass").removeClass("errorClass");
          checksubmit();
        return false;
    }
}
function checkpass()
{
    if ($("#pswd").val() != $("#cpswd").val())
    {
        $("#cpassError").addClass("errorClass").removeClass("noerrorClass");
        $("#cpassError").html("Password and Confirm password need to be the same");
        cpasscheck = false;
    }
    checksubmit();


}
function checksubmit()
{
    if (emailcheck == true && unamecheck == true && passcheck == true && cpasscheck == true)
        $("#submit").attr('disabled',false);
    else
        $("#submit").attr('disabled',true);
}

function handleSubmit(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    window.location.href = 'calc.html?username=' + encodeURIComponent(username);
}