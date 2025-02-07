
//api fetch


const real_temp = document.querySelector("#real_temp");
const real_city = document.querySelector("#real_city");
const percent = document.querySelector("#percent");
const speed = document.querySelector("#speed");
const real_img = document.querySelector("#real_img");
const img_box = document.querySelector("#img_box");
const input_box = document.querySelector("#input_box");
const body = document.querySelector("body");


img_box.addEventListener("click", function () {
    const part_1 = "https://api.openweathermap.org/data/2.5/weather?q=";
    const part_2 = "&appid=217fbdf0ca1d389b54a744f720c84d26&units=metric";

    fetch(`${part_1}${input_box.value}${part_2}`)//calling API
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data)

            //note dot is used to access furthur innner contents
            real_city.innerHTML = data.name;
            real_temp.innerHTML = Math.round(data.main.temp) + " &#8451 ";//to round of temperature
            percent.innerHTML = data.main.humidity + " % ";
            speed.innerHTML = data.wind.speed + " km/hr ";

            if (data.weather[0].main === "Clear") {
                real_img.src = "clear.png";
                body.style.background = " linear-gradient(to bottom, #fca5a5, #fb923c,#dc2626)";//

            }
            else if (data.weather[0].main === "Clouds") {
                real_img.src = "clouds.png";
                body.style.background = " linear-gradient(to bottom, #fef08a, #86efac,#5eead4)";
            }
            else if (data.weather[0].main === "Drizzle") {
                real_img.src = "drizzle.png";
                body.style.background = "linear-gradient(to bottom, #818cf8, #f0abfc,#f9a8d4)";
            }
            else if (data.weather[0].main === "Snow") {
                real_img.src = "snow.png";
                body.style.background = " linear-gradient(to bottom, #374151, #1f2937,#0f172a) ";//
            }
            else if (data.weather[0].main === "Mist") {
                real_img.src = "mist.png";
                body.style.background = " linear-gradient(to bottom, #84cc16, #16a34a, #0d9488) ";//
            }
            else if (data.weather[0].main === "Rain") {
                real_img.src = "rain.png";
                body.style.background = " linear-gradient(to bottom, #5b21b6, #be185d,#be123c) ";//
            }


            input_box.value = "";//to clear search box at end

        }
        );






})







