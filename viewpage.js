

function display(){
    
    var favoriteMovie = sessionStorage.getItem('favoriteMovie');
    var favoriteMovie1 = sessionStorage.getItem('favoriteMovie1');
    var favoriteMovie2 = sessionStorage.getItem('favoriteMovie2');
    var favoriteMovie3 = sessionStorage.getItem('favoriteMovie3');
    var favoriteMovie4 = sessionStorage.getItem('favoriteMovie4');
    var favoriteMovie5 = sessionStorage.getItem('favoriteMovie5');
    var favoriteMovie6 = sessionStorage.getItem('favoriteMovie6');
    var favoriteMovie7 = sessionStorage.getItem('favoriteMovie7');
    var favoriteMovie8 = sessionStorage.getItem('favoriteMovie8');
    var favoriteMovie9 = sessionStorage.getItem('favoriteMovie9');
    var favoriteMovie10 = sessionStorage.getItem('favoriteMovie10');
    var favoriteMovie11 = sessionStorage.getItem('favoriteMovie11');
    var favoriteMovie12 = sessionStorage.getItem('favoriteMovie12');
    var favoriteMovie13 = sessionStorage.getItem('favoriteMovie13');
    var favoriteMovie14 = sessionStorage.getItem('favoriteMovie14');
    var favoriteMovie15 = sessionStorage.getItem('favoriteMovie15');
    var favoriteMovie16 = sessionStorage.getItem('favoriteMovie16');

    // alert(favoriteMovie);
    document.getElementById("value1").innerHTML=favoriteMovie;
    document.getElementById("value2").innerHTML=favoriteMovie1;
    document.getElementById("value3").innerHTML=favoriteMovie2;
    document.getElementById("value4").innerHTML=favoriteMovie3;
    document.getElementById("value5").innerHTML=favoriteMovie4;
    document.getElementById("value6").innerHTML=favoriteMovie5;
    document.getElementById("value7").innerHTML=favoriteMovie6;
    document.getElementById("value8").innerHTML=favoriteMovie7;
    document.getElementById("value9").innerHTML=favoriteMovie8;
    document.getElementById("value10").innerHTML=favoriteMovie9;
    document.getElementById("value11").innerHTML=favoriteMovie10;
    document.getElementById("value13").innerHTML=favoriteMovie11;
    document.getElementById("value14").innerHTML=favoriteMovie12;
    document.getElementById("value15").innerHTML=favoriteMovie13;
    document.getElementById("value16").innerHTML=favoriteMovie14;
    document.getElementById("value17").innerHTML=favoriteMovie15;
    document.getElementById("value18").innerHTML=favoriteMovie16;
    
}
function finished(){
    alert("Form Submited sucessfully")
    window.location.replace("index.html")
}

