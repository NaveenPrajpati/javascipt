const lin=document.getElementsByClassName("line")[0];
const lin2=document.getElementsByClassName("line2")[0];
const lin3=document.getElementsByClassName("line3")[0];


setInterval(() => {
    let sec=new Date().getSeconds();
    let min=new Date().getMinutes();
    let hr=new Date().getHours();
let dg=6*sec
lin.style.cssText = `transform: rotate(${dg}deg);`;
let dg2=6*min
lin2.style.cssText = `transform: rotate(${dg2}deg);`;
let dg3=30*(hr)+min/2;
lin3.style.cssText = `transform: rotate(${dg3}deg);`;
}, 1000);