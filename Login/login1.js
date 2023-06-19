function validation()
{

    if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="*Enter your E-mail";
        return false;
    }

    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="*Enter your Password";
        return false;
    }

    else if(document.Formfill.CPassword.value !== document.Formfill.Password.value){
        document.getElementById("result").innerHTML="*Password doesn't match";
        return false;
    }

    else if(document.Formfill.Password.value == document.Formfill.CPassword.value){
        popup.classList.add("open-slide")
        return false;
    }

}