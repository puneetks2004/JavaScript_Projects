const Value_box = document.querySelectorAll(".box");
const user_display = document.querySelector("#input");

console.log(Value_box);
let string = "";//empty string variable

Value_box.forEach(function (items)
{
    items.addEventListener('click', function (e)
    {
        
        //console.log(e.target.innerHTML)//gives value of innerHTML i.e. symbols
        if (e.target.innerHTML === "AC")
        {
            string = "";//all clear
            user_display.value = string;//to display empty on screen
        }
        else if (e.target.innerHTML === "DEL")
        {
            string = string.substring(0, string.length - 1)//returning same value but one less than previous
            user_display.value = string;//to display changed value on screen
        }
        else if (e.target.innerHTML === "=") {
            string = eval(string);//evaluating and storing result in string variable
            user_display.value=string;//to display result on screen

        }
        else {
            string = string + e.target.innerHTML;//storing all number with sign in string
            user_display.value = string;//displaying all on the screen
        }
    })
})