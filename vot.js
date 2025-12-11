function vote(){
    //alert("Hello")
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
   var par = document.getElementById("par");
 
    if(age>18){
        //alert("Eligible to vote");
        par.innerHTML = "Your are eligible to Vote"
    }else{
        //alert("Your are minor")
        par.innerHTML="Your still a child 😂🤣";
    }
}