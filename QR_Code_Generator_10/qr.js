const input = document.getElementById("input_area");

const btn = document.querySelector(".diva");
const box = document.getElementById("space_for_code");
const api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="; 
const imginitial = document.getElementById("ima");

btn.addEventListener("click",generatecode)

// console.log(box.children[0]);-----------returns a html collection

function generatecode() {

    // if (box.children[0] == p)
    // {
    //     p.remove();
    // }
    // else {
    //     //do nothing
    // }---------------cannot use this since till now p is not created

    //so use on basis of id of p
    //done to remove constant writing of same message of p
    const val = document.querySelector(".alert");//alert is class of p tag 
    if (val) val.remove();

    if (input.value.length === 0) {
        //means nothing entered
        imginitial.remove();//to remove image
        const p=document.createElement('p');//p is created here
        p.setAttribute('class', "alert");
        p.innerHTML = "Enter Some Value !!";
        box.appendChild(p);

    }
    else {
        //if some value present
        //use api
        
        
        const imgsrc = api + input.value;
        box.appendChild(imginitial);
        imginitial.src = imgsrc;

    }
   
    input.value = "";
}