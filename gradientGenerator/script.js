const input=document.getElementsByClassName("col");
let gradient=document.getElementsByClassName("gradient");
const type=document.getElementById("type");
const direction=document.getElementById("direction");
const range=document.getElementById("range");
const shape=document.getElementById("shape");
const refreshBtn=document.getElementById("refresh");
const textarea=document.getElementsByTagName("textarea")[0];

const random=()=>{
    const randomNum=Math.floor(Math.random() * 0xffffff);
    const randomhex="#"+randomNum.toString(16);
    input[0].value=ran
}

const generateGradient=()=>{
    let css;
    if(direction.value==="angle"){
        console.log(direction.value)
        document.getElementsByClassName("angle")[0].style.display="block";
    
        console.log(range.value+"deg");
         css=` ${type.value}(${range.value+"deg"},${input[0].value},${input[1].value})`;
    }else if(type.value==="radial-gradient"){
        document.getElementsByClassName("shape")[0].style.display="block";
        document.getElementsByClassName("direction")[0].style.display="none";
        css=` ${type.value}(${shape.value},${input[0].value},${input[1].value})`;
        
    }
    else if(type.value=="linear-gradient"){
        document.getElementsByClassName("shape")[0].style.display="none";
        document.getElementsByClassName("direction")[0].style.display="block";
     css=` ${type.value}(${direction.value},${input[0].value},${input[1].value})`;
    }
      gradient[0].style.background=css
    textarea.innerHTML="background-image:"+css

}
for(let i=0;i<input.length;i++){
    input[i].addEventListener("input",generateGradient);
}

direction.addEventListener("change",generateGradient);
range.addEventListener("change",generateGradient);
type.addEventListener("change",generateGradient);
shape.addEventListener("change",generateGradient);