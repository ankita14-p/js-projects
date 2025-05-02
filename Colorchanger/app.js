const btns=document.querySelectorAll("button");
const body=document.body;
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        color=btn.innerText;
        changebody(color);
    });
});
function changebody(color){
    body.className="";
    switch(color){
        case "Purple":
            body.classList.add("purple");
            break;
        case "Red":
            body.classList.add("red");
            break;
        case "Teal":
            body.classList.add("teal");
            break;
        case "Yellow-Green":
            body.classList.add("yellowgreen");
            break;
    };
};