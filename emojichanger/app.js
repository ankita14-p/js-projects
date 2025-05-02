const emoji=document.querySelector(".emoji");
const emojis=[
    "😂",
    "😁",
    "😜",
    "😘",
    "👀",
    "❤",
    "🤢",
    "💕",
    "🤷‍♂️",
    "🤔"

];
emoji.addEventListener("mouseover",()=>{
    emoji.textContent=emojis[Math.floor(Math.random()*emojis.length)];
})