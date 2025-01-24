const val = document.querySelector('#master');

val.addEventListener('click', function (e) {
    e.preventDefault();//to prevent default behaviour of button of loading data to server


    //to access value entered by user we have  ".value" parseint converts strings to numeric to ensure always a numeric value is received, if in case value cannot be converted to numeric returns NaN
    const height = parseInt(document.querySelector('#height').value);//to access height
    const weight = parseInt(document.querySelector('#weight').value);//to access weight

    const gf = document.querySelector('#section_03');
    if (height < 0 || height === "" || isNaN(height))//if not a number or empty or less than 0
    {
        gf.innerHTML = `KINDLY ENTER A VALID VALUE ,YOUR VALUE IS ${height}`;
    }
    if (weight < 0 || weight === "" || isNaN(weight))//if not a number or empty or less than 0
    {
        gf.innerHTML = `KINDLY ENTER A VALID VALUE ,YOUR VALUE IS ${weight}`;
    }
    else //formula to calculate
    {

        const dk = document.querySelector('#section_05');
        const exact = (height * height) / 10000;//to convert value to meters
        const res = (weight / exact).toFixed(2);
        gf.innerHTML = ` YOUR BMI IS ${res}`;
        if (res < 18.6) {
            dk.innerHTML = `YOUR CATEGORY IS : UNDERWEIGHT `
        }
        else if ((18.6 <= res) && (res <= 24.9)) {
            dk.innerHTML = `YOUR CATEGORY IS : NORMAL WEIGHT `
        }
        else {
            dk.innerHTML = `YOUR CATEGORY IS : OVERWEIGHT `
        }

    }
})