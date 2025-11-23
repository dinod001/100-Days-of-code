//Add task
document.getElementById("addBtn").addEventListener("click",()=>{
    text = document.getElementById("input").value;
    const li = document.createElement("li")
    li.textContent=text
    document.getElementById("list").appendChild(li)
})

//remove task
document.getElementById("deleteBtn").addEventListener("click",()=>{
    //getting all the li elements under this list
    const list = document.getElementById("list");
    list.removeChild(list.lastElementChild);
})