document.getElementById("add-btn").addEventListener("click", function(){
    const task = document.getElementById("todo-input").value;
    console.log("You Typed : ", task);

    const li = document.createElement("li");
    li.textContent=task;


    const delbtn= document.createElement("button");
    delbtn.textContent="Delete";
    delbtn.addEventListener("click",function(){
        li.remove();
    });

    li.appendChild(delbtn);

    document.getElementById("todo-list").appendChild(li);
    document.getElementById("todo-input").value="";

    li.addEventListener("click",function(){
        if(li.style.textDecoration === "line-through"){
            li.style.textDecoration ="none";
        }else{
            li.style.textDecoration="line-through"
        }
    })
   
})