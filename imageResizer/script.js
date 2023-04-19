let file=document.getElementById("file");
let box=document.getElementsByClassName("image")[0];
let width=document.getElementById("width");
let height=document.getElementById("height");
let ratio=document.getElementById("ratio");
let dbutton=document.getElementById("dbutton");
let rbutton=document.getElementById("rbutton");
let quality=document.getElementById("quality");
let photo=document.querySelector("img");
let size=document.getElementById("size");
let aspectratio;

const loadFile=(event)=>{
   
    const file=event.target.files[0];//for selecting first selected file
    if(!file)return;
    console.log(file);
    photo.src=URL.createObjectURL(file);
    photo.addEventListener("load",()=>{
        width.value=photo.naturalWidth;
        height.value=photo.naturalHeight;
        size.value=Math.floor(file.size/1000);
        aspectratio=photo.naturalWidth/photo.naturalHeight;
        box.classList.add("active");
    });
    
}
width.addEventListener("keyup",()=>{
    const newHeight=ratio.checked ? width.value/aspectratio :height.value;
    height.value=Math.floor(newHeight);
});
height.addEventListener("keyup",()=>{
    const newWidth=ratio.checked ? height.value*aspectratio :width.value;
    width.value=Math.floor(newWidth);
});
const resizeAndDownload=()=>{
    const canvas=document.createElement("canvas");
    var a=document.createElement("a");
    const ctx=canvas.getContext("2d");
    
   
    //setting canvas height and width according to inputs
    canvas.width=width.value;
    canvas.height=height.value;

    //drawing user selected image onto the canvas
    ctx.drawImage(photo,0,0,canvas.width,canvas.height);

    a.href=canvas.toDataURL("image/jpeg",imageQuality);
    a.download=new Date().getTime();
    
    a.click();//a set to click to download image
}
const download=()=>{
    
     
}

quality.addEventListener("change",()=>{
    console.log(quality.value);
    imageQuality=quality.value/100;
})
rbutton.addEventListener("click",resizeAndDownload);
dbutton.addEventListener("click",download);

file.addEventListener("change",loadFile);
box.addEventListener("click",()=>file.click());



