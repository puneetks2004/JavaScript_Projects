
//poor way---->involves going one by one and making change

// const value = document.querySelector("#red");

// const body = document.querySelector('body');

// value.addEventListener('click', function ()
// {
//     body.style.backgroundColor = "red";
//     console.log("clicked");
// })




//reliable approach
//a bit change in color is due to browser settings


const buttons = document.querySelectorAll('.button');
console.log(buttons);//returns a node list so i can apply foreach loop in it
const body = document.querySelector('body');

buttons.forEach(function (items) {
    console.log(items);
    items.addEventListener('click', function (e) {

        console.log(e);
        console.log(e.target);

        if (e.target.id === "blue") {
            body.style.backgroundColor = e.target.id;//or can also mention that exact color code
        }
        if (e.target.id === "green") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "red") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "pink") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "purple") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "orange") {
            body.style.backgroundColor = e.target.id;
        }



    })
})