function validate(){
var fname=logform.fullname.value;
var emailid=logform.email.value;
var phone=logform.phno.value;
var password=logform.pwd.value;
var conpass=logform.conpwd.value;
var p='password';
var k='123456789';
if(fname.length<5){  
    alert("Name must be at least 5 characters long.");  
    return false;  
}else if(emailid.indexOf('@')<=0){
    alert("Invalid email id");
    return false;
}else if(phone.length!=10||phone.value==k){
     alert("Invalid phone number");
     return false;
}else if(password==p||password.length<8||password==fname){
    alert("password is not strong");
    return false;
}else if(password!=conpass){
    alert("password must be same");
    return false;
}else{
        alert("login successfully!!!");
        return false;
}
}