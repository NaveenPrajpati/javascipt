var input=document.getElementById("inp");

input.addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        addList(this.value);
        this.value="";
    }
})

const addList=(item)=>{
    let lis=document.createElement("li");
    lis.innerHTML=`${item}
    <i class="material-symbols-outlined">
        close
        </i>`;

        lis.getElementsByTagName("i")[0].addEventListener("click",function(){
            lis.remove();
        });

        document.getElementById("listData").appendChild(lis);
}