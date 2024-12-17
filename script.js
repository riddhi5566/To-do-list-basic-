//updating elements

function update(index)
{
    const el = document.querySelector("input").value;
    if(!el)
    {
        alert("cannot update empty value");
        return;
    }

    document.getElementById("todo-" +index).innerHTML= "<div>"+el+"<button class='del' onClick='deleteTodo(" + index +")'>Delete</button> <button class='up' onclick='update("+index+")'>Update</button></div> <br/>";
    document.querySelector("input").value = "";
}



function deleteTodo(index)
{
    const el = document.getElementById("todo-" +index);
    el.parentNode.removeChild(el);
}

//adding elements


let index = 1;

function addTodo()
{
    //to get the value in input box
    const inputEl = document.querySelector("input");
    const val = inputEl.value;

    //if the input is empty
    if(!val)
    {
        alert("Input cannot be empty");
        return;
    }
    //craeting a new div element
  
    const divEl = document.createElement("div");

    //setting index to that div element
    divEl.setAttribute("id","todo-"  +index);

    //inside of the div element
    divEl.innerHTML = "<div>"+val+"<button class='del' onClick='deleteTodo(" + index +")'>Delete</button> <button class='up' onclick='update("+index+")'>Update</button></div> <br/>";
    index = index + 1;

    //adding the div to body
    document.querySelector("body").appendChild(divEl);

    //after adding it to the todo we clear the input box
    inputEl.value="";
    
}
