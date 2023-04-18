const api="https://api.github.com/users/";
let n=document.getElementById("find");

const getUser=async(username)=>{
    const response=await fetch(api+username);
    const data =await response.json()
    const repo=await fetch(data.repos_url);
    const rep=await repo.json();
    console.log(data)
    console.log(rep)
  
    document.getElementsByTagName("img")[0].src=data.avatar_url;
    console.log(document.getElementById("following").innerHTML=data.following);
    console.log(document.getElementById("followers").innerHTML=data.followers);
    console.log(document.getElementById("repos").innerHTML=rep.length);
    console.log(document.getElementById("bio").innerHTML=data.bio);
    console.log(document.getElementById("name").innerHTML=data.name);
    console.log(document.getElementById("location").innerHTML=data.location);
    console.log(document.getElementById("jdate").innerHTML=data.created_at);
    console.log(document.getElementById("url").href=data.url);
    console.log(document.getElementById("url").innerHTML=data.login);

}
function getInfo(){
    
    getUser(n.value);
}
n.addEventListener("keydown ",function(event){
    if(event.key=="Enter")
    getUser(n.value);
})

// document.getElementById("light").addEventListener("toggle",function(){
//     let set=document.getElementsByClassName("search")[0];
    
// })


  let one=  document.getElementById("light").ontoggle=function() {change()};
  
  function change(){
    // let set=document.getElementsByClassName("container")[0].style.backgroung="red";
    document.getElementById("all").style.backgroundColor="red";
}