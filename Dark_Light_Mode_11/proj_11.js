
const toggleButton = document.getElementById("theme");
const img = document.getElementById("ima");
//html root element
toggleButton.addEventListener("click", () => {
    const html = document.querySelector("html");
    if (html.classList.toggle("dark"))
    {
        img.src = "dark.jpg";
    }
    else {
        img.src = "light.jpg";
    }
    localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
})

// window.onload = () => {
//     const theme = localStorage.getItem("theme");
//     const html = document.querySelector("html");
//     if (theme === "dark") {
//         html.classList.add("dark");
//     }
// }
