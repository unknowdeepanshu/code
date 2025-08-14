let value= document.querySelector("input")
let add=document.getElementById("add")
let under=document.querySelector("ul")

add.addEventListener("click",function(){
    let info=value.value
    let lists=document.createElement("li")
    let Btn=document.createElement("button")
    let div=document.createElement("div")
    div.id="dev"
    lists.classList.add("li")
    Btn.id="del"
    lists.innerText=info+""
    Btn.innerText="Delete"
    under.appendChild(div)
    div.appendChild(lists)
    div.appendChild(Btn)
    value.value=""
})
under.addEventListener("click",(event)=>{
    if(event.target.nodeName=="BUTTON"){
        let par=event.target.parentElement;
        par.remove()
    }
})