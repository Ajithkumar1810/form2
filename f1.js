function checking_fname(){
    const first_name=document.getElementById("fname").value;
    if( first_name==="" ){
        document.getElementById("s1").innerHTML="Its mandatory";
    }
    else if(first_name.match(/^[a-zA-Z]+$/)){
        document.getElementById("s1").innerHTML="";
    }
    else{
        document.getElementById("s1").innerHTML='Name should be only aplhabet';
    }
    sessionStorage.setItem("favoriteMovie", first_name);
}
function checking_lname(){
    const last_name=document.getElementById("lname").value;
    if( last_name==="" ){
        document.getElementById("s2").innerHTML="Its mandatory";
    }
    else if(last_name.match(/^[a-zA-Z]+$/)){
        document.getElementById("s2").innerHTML="";
    }
    else{
        document.getElementById("s2").innerHTML='Name should be only aplhabet';
    }
    sessionStorage.setItem("favoriteMovie1", last_name);
}
function checking_email(){

    const email_1=document.getElementById("email").value;
    if( email_1==="" ){
        document.getElementById("s3").innerHTML="Its mandatory";
    }
    else if(email_1.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        document.getElementById("s3").innerHTML="";
    }
    else{
        document.getElementById("s3").innerHTML="invalid Email";
    }
    sessionStorage.setItem("favoriteMovie2", email_1);
}
function checking_phone(){
    const phone_1=document.getElementById("phone").value;
    if( phone_1==="" ){
        document.getElementById("s4").innerHTML="Its mandatory";
    }
    else if( phone_1.match(/^\d{10}$/)){
        document.getElementById("s4").innerHTML="";
    }
    else{
        document.getElementById("s4").innerHTML="invalid phone number";
    }
    sessionStorage.setItem("favoriteMovie3", phone_1);
}
function checking_pincode(){
    const pincode=document.getElementById("pincode").value;
    if( pincode==="" ){
        document.getElementById("s11").innerHTML="Its mandatory";
    }
    else if(pincode.match(/^\d{6}$/)){
        document.getElementById("s11").innerHTML="";
    }
    else{
        document.getElementById("s11").innerHTML="invalid pincode";
    }
    sessionStorage.setItem("favoriteMovie10", pincode);

}
function checking_address1(){
    const address1 = document.getElementById('address1').value;
    if( address1==="" ){
        document.getElementById("s7").innerHTML="Its mandatory";
    }
    else{
        document.getElementById("s7").innerHTML="";
    }
    sessionStorage.setItem("favoriteMovie6", address1);

}
function checking_address2(){
    const address2 = document.getElementById('address2').value;
    if( address2==="" ){
        document.getElementById("s8").innerHTML="Its mandatory";
    }
    else{
        document.getElementById("s8").innerHTML="";
    }
    sessionStorage.setItem("favoriteMovie7", address2);

}

function myfunction(){
   
    var gender="Male";
    var intrested="";
    checking_address1();
    checking_address2();
    checking_email();
    checking_fname();
    checking_lname();
    checking_phone();
    checking_pincode();
    
    const dob = document.getElementById('dob').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;   
    const photo = document.getElementById('photo').value;
    const sign = document.getElementById('sign').value;
  
    
    const course1=document.getElementById("course1").value;
    const course2=document.getElementById("course2").value;
    const course3=document.getElementById("course3").value;
    if(course1===course2||course1===course3||course3===course2)
    {
        document.getElementById("s14").innerHTML="select different courses";
    }
    else{
        document.getElementById("s14").innerHTML="";
    }
    sessionStorage.setItem("favoriteMovie11", course1);
    sessionStorage.setItem("favoriteMovie12", course2);
    sessionStorage.setItem("favoriteMovie13", course3);
    if(document.getElementById("male").checked){
        gender="Male";
        sessionStorage.setItem("favoriteMovie4", gender);
    }
    else if(document.getElementById("female").checked){
        gender="Female";
        sessionStorage.setItem("favoriteMovie4", gender);
    }
    else{
        gender="Others";
        sessionStorage.setItem("favoriteMovie4", gender);
    }
    if(document.getElementById('Sports').checked){
        intrested+=" Sports,"
        sessionStorage.setItem("favoriteMovie14", intrested);
    }
     if(document.getElementById('Singing').checked){
        intrested+=" Singing,"
        sessionStorage.setItem("favoriteMovie14", intrested);
    }
     if(document.getElementById('Dance').checked){
        intrested+=" Dance,"
        sessionStorage.setItem("favoriteMovie14", intrested);
    }
    if(document.getElementById('None').checked)  {
        intrested+=" None,"
        sessionStorage.setItem("favoriteMovie14", intrested);
    }
    
    sessionStorage.setItem("favoriteMovie5", dob);
    sessionStorage.setItem("favoriteMovie8", city);
    sessionStorage.setItem("favoriteMovie9", state);  
   
    
    sessionStorage.setItem("favoriteMovie15", photo);
    sessionStorage.setItem("favoriteMovie16", sign);
}

