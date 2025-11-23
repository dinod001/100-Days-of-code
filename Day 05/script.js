//✅ 1. DOM Manipulation Practice

//Change text on button click
document.getElementById("btn").addEventListener("click",()=>{
    document.getElementById("text").textContent="Upated"
})

//Change background color
document.getElementById("colorBtn").addEventListener("click",()=>{
    colors=['red','green','blue','yellow']
    document.body.style.background = colors[Math.floor(Math.random() * colors.length)]
})

//Add new element to the page
document.getElementById("addBtn").addEventListener("click",()=>{
    const li = document.createElement("li")
    li.textContent="Apple"
    document.getElementById("list").appendChild(li)
})

//✅ 2. Events Practice
document.getElementById("nameInput").addEventListener("input",(e)=>{
    document.getElementById("display").textContent=e.target.value
})

//Task 5: Mouseover event
document.getElementById("box").addEventListener("mouseover",()=>{
    document.getElementById("box").style.background = "orange";
})

//✅ 3. Async Operations Practice
document.getElementById("load").textContent="Loading...."

setTimeout(()=>{
    document.getElementById("load").textContent = "Done!";
},2000)