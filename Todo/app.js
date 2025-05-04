const form=document.querySelector("form");
const input=document.querySelector("input");
const todos=document.querySelector(".todos");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let value=input.value;
     if(!value.trim()) return;
     todos.appendChild(getTodo(value));
     input.value="";
});
function getTodo(value){
    let todo=document.createElement("div");
    let task=document.createElement("span");
    let closebtn=document.createElement("span");
    task.innerText=value;
   todo.appendChild(task);
   todo.classList.add("todo")
   closebtn.innerHTML="&times;";
   todo.appendChild(closebtn);
   closebtn.classList.add("delete");
    closebtn.addEventListener("click",()=>{
        todos.removeChild(todo);
    });
   return todo;
}