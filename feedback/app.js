const ratings=document.querySelectorAll(".rating")
const panel=document.querySelector("#main");
const activeRating=document.querySelector(".rating-container");
const send=document.querySelector("#send");
let selectedFeedback= "Satisfied";

activeRating.addEventListener("click",(e)=>{
    if(e.target.parentNode.classList.contains("rating")){
        removeActive();
        e.target.parentNode.classList.add("active");
        selectedFeedback=e.target.nextElementSibling.innerText;
    };
});
send.addEventListener("click",()=>{
    panel.innerHTML=
     `<p class="icon">💖</p>
     <strong>Thank You</strong>
     <br>
     <strong>Feedback:${selectedFeedback}</strong>
     `;
});
function removeActive(){
    for(let i=0;i<ratings.length;i++){
        ratings[i].classList.remove("active");
    }
};