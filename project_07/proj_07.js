const input_box = document.querySelector("#input_box");
const btn = document.querySelector("#btn");
const container = document.querySelector("#container");



btn.addEventListener("click", function () {
    if (input_box.value === "") {
        alert("Kindly Enter Your Task");
    }
    else {
        const li = document.createElement("li");
        li.innerHTML = input_box.value;
        container.appendChild(li);
        const span = document.createElement("span");
        span.innerHTML = "&#10006";
        li.appendChild(span);
    }
    //to automatically erase it and keep space free for next time
    input_box.value = "";
    savedata();//calling
})


container.addEventListener("click", function (e)//to target must include event object
{
    e.preventDefault();
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checkmate");//add class checkmate
        savedata();//calling
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();//remove parent element
        savedata();//calling
    }
})

//to allow to save data upo refresh save it on local storage of browser to do that 
function savedata() {
    localStorage.setItem("data", container.innerHTML);
}
function showtask() {
    container.innerHTML = localStorage.getItem("data");
}

showtask()//calling