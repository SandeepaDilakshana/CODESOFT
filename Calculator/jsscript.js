const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => console.log(e.target.detaset.value));
});

//https://youtu.be/cHkN82X3KNU?si=6uN9kAHzq8N9aJhG  8:38 timestamp