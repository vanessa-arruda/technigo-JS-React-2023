// // Select the element with the class "box" and store it in the "box" variable.
// const box = document.querySelector(".box");

// // Select all input elements with the name attribute set to "theme" and store them in the "themeRadios" variable.
// const themeRadios = document.querySelectorAll('input[name="theme"]');

// // Loop through each radio button in the "themeRadios" NodeList.
// themeRadios.forEach((radio) => {
//   // Add an event listener to each radio button to listen for the "change" event.
//   // This event triggers when the radio button's state changes (i.e., when it's selected).
//   radio.addEventListener("change", function () {
//     let color; // Declare a variable to store the background color value.

//     // Check the value of the currently selected radio button (using 'this') and set the "color" variable accordingly.
//     if (this.value === "dark") {
//       color = "darkgray";
//     } else if (this.value === "light") {
//       color = "lightblue";
//     } else if (this.value === "crazy") {
//       color = "purple";
//     } else {
//       color = "lightgreen"; // Default color.
//     }

//     // Add the "color-transition" class to the "box" element.
//     // This class presumably contains CSS that provides a smooth color transition effect.
//     box.classList.add("color-transition");

//     // Change the background color of the "box" element to the value stored in the "color" variable.
//     box.style.backgroundColor = color;

//     // Set a timeout to execute a function after a delay of 300 milliseconds.
//     setTimeout(() => {
//       // After the delay, remove the "color-transition" class from the "box" element.
//       // This might be done to ensure that subsequent changes to the box's style don't have the transition effect.
//       box.classList.remove("color-transition");
//     }, 300); // 300 milliseconds delay.
//   });
// });
// console.log("Start Here 😉");

const boxContainer = document.getElementById("box-container")
function changeStyle(backgroundColor, color) {
    boxContainer.style.backgroundColor = backgroundColor;
    document.getElementById("first-text").style.color = color;
}

document.getElementById("dark").addEventListener("change", () => {
    changeStyle('#2d2d2d', '#e3e3e3');

});

document.getElementById("light").addEventListener("change", () => {
    changeStyle('#e3e3e3', '#000000');
});

document.getElementById("crazy").addEventListener("change", () => {
    changeStyle('#bf1da4', '#fbff00');
});
