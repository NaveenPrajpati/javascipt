 
 function rand(min,max){
    let a=Math.floor(Math.random() * (max - min + 1) ) + min;
   return a
 }

 let upper=document.getElementById("up");
 let lower=document.getElementById("lo");
 let spec=document.getElementById("special");
 let numb=document.getElementById("num");
 let charlength=document.getElementById("range");
let length=document.getElementById("drange");
let disp=document.getElementById("display");
let password="";
let sp="!@#$%^&*()_+{}][:'<>";

 charlength.oninput = function() {
    length.value=this.value;
  }

  function generate(){
    if(upper.checked && password.length<length.value){
        password+=String.fromCharCode(rand(65,90));
    }
    if(lower.checked && password.length<length.value){
        password+=String.fromCharCode(rand(97,122));
    }
    if(special.checked && password.length<length.value){
        password+=sp.charAt(rand(0,sp.length));
    }
    if(numb.checked && password.length<length.value){
        password+=String.fromCharCode(rand(48,57));
    }
    if(password.length==length.value){
        shuffle(password);
       
    }
    if(password.length<length.value){
        generate();
    }
  }
  let shuffle = (s) => {
    let str = s.split('')
      .sort(() => 0.5 - Math.random())
      .join('');
    
      disp.value=str;  
      password="";   // show shuffled characters.
  }

  