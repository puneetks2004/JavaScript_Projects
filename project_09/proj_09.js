const input_box = document.querySelector("#input_box");
const copy = document.querySelector("#img_01");
const regenerate = document.querySelector("#regenerate");

let i_length = 12;//length of password

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*(){}";

let password = "";


//adding all strings
const addAll = upperCase + lowerCase + numbers + symbols;

regenerate.addEventListener("click", function () {

    password = "";//to clear password old password , so that next time password gets generated from scratch


    password += upperCase[Math.floor((Math.random()) * upperCase.length)];//old string added
    password += lowerCase[Math.floor((Math.random()) * lowerCase.length)];//old string added
    password += numbers[Math.floor((Math.random()) * numbers.length)];//old string added
    password += symbols[Math.floor((Math.random()) * symbols.length)];//old string added

    //till now 4 letters are generated but since we have to restrict to 12 so next we will apply for loop


    while (password.length < 12) {
        password += addAll[Math.floor((Math.random()) * addAll.length)];//keep on repeting till length is small
    }



    input_box.value = password;//to display on screen
    input_box.removeAttribute("id");
    input_box.setAttribute("id", "input_box");


})

copy.addEventListener("click", function () {
    navigator.clipboard.writeText(input_box.value);//to bring value in clipboard

    //to highlight
    input_box.setAttribute("id", "select");

})







