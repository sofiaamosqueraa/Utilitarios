document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("toggle-button");
    var body = document.body;

    button.addEventListener("click", function() {
        if (button.classList.contains("on")) {
            button.textContent = "Dark";
            button.classList.remove("on");
            button.classList.add("off");
            body.style.background = "linear-gradient(to bottom, #000000, #000000, #9e2214, #000000, #000000)"; 
            body.style.color = "white";
        } else {
            button.textContent = "Light";
            button.classList.remove("off");
            button.classList.add("on");
            body.style.background = "linear-gradient(to bottom, #FFE4E1, #20B2AA, #FFE4E1)"; // Cambia el fondo al gradiente
            body.style.color = "black";
        }
    });
});


// document.addEventListener("DOMContentLoaded", function() {
//     var button = document.getElementById("toggle-button");
//     var body = document.body;
//     button.classList.add("on"); // Asegura que el botón comience con la clase "on"

//     button.addEventListener("click", function() {
//         if (button.classList.contains("on")) {
//             button.textContent = "Light";
//             button.classList.remove("on");
//             button.classList.add("off");
//             body.style.background = "black"; // Cambia background a backgroundColor
//             body.style.color = "white";
//         } else {
//             button.textContent = "Dark";
//             button.classList.remove("off");
//             button.classList.add("on");
//             body.style.background = "linear-gradient(to bottom, #FFE4E1, #20B2AA, #FFE4E1)"; // Cambia background a backgroundColor
//             body.style.color = "black";
//         }
//     });
// });


/* document.getElementById("toggle-button").addEventListener("click", function() {
    var button = document.getElementById("toggle-button");
    var body = document.body;

    // var content = document.getElementById("content");

    if (button.classList.contains("on")) {
        button.textContent = "Light";
        button.classList.remove("on");
        button.classList.add("off");
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        button.textContent = "Dark";
        button.classList.remove("off");
        button.classList.add("on");
        body.style.background = "linear-gradient(to bottom, #FFE4E1, #20B2AA, #FFE4E1)";
        body.style.color = "black";
    }
}); */

