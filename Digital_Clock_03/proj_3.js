const clock = document.querySelector("#clock");

// const fc = new Date();-----------------dont involve here selects only once
//to generate clock after every interval of 1 second


setInterval(function () {
    const fc = new Date();//now even date is selected after every interval
    console.log(fc.toLocaleString());
    clock.innerHTML = fc.toLocaleString();
}, 1000);