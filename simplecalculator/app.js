const main=document.querySelector(".container")
let symbol=document.querySelector("#sign");
const btn=document.querySelector(".btn");
let ans=0;
btn.addEventListener("click",()=>{
    const firstNum=document.getElementById("firstnumber").value;
     const secondNum=document.getElementById("secondnumber").value;
    switch(symbol.value){
        case "+":
            ans=parseInt(firstNum)+parseInt(secondNum);
        main.innerHTML=
        `
        <strong>Ans:${ans}</strong>
        <button onclick="window.location.href='index.html'">Return</button>
        `;
        break;
        case "-":
            ans=parseInt(firstNum)-parseInt(secondNum);
        main.innerHTML=
        `
        <strong>Ans:${ans}</strong>
        <button onclick="window.location.href='index.html'">Return</button>

        `;
        break;
        case "*":
            ans=parseInt(firstNum)*parseInt(secondNum);
        main.innerHTML=
        `
        <strong>Ans:${ans}</strong>
        <button onclick="window.location.href='index.html'">Return</button>
        `;
        break;
        case "/":
            ans=parseInt(firstNum)/parseInt(secondNum);
        main.innerHTML=
        `
        <strong>Ans:${ans}</strong>
        <button onclick="window.location.href='index.html'">Return</button>

        `;
        break;
    
    };
});

