//constants for query selector
const customNumberInput = document.getElementById("customNumber");
const myStudentId = document.getElementById("myStudentId");
const custColorButton = document.querySelector(".custColor");
const randColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const images = document.getElementById("images");

//function to change bg color from user input n add student id
function changeCustomColor() {
    const customColorInput = parseInt(customNumberInput.value);


//check input conditions n set bg color accordingly
if (customColorInput < 0 || customColorInput > 100) {
        document.body.style.backgroundColor = "red";
    } else if (customColorInput >= 0 && customColorInput <= 20) {
        document.body.style.backgroundColor = "green";
    } else if (customColorInput > 20 && customColorInput <= 40) {
        document.body.style.backgroundColor = "blue";
    } else if (customColorInput > 40 && customColorInput <= 60) {
        document.body.style.backgroundColor = "orange";
    } else if (customColorInput > 60 && customColorInput <= 80) {
        document.body.style.backgroundColor = "purple";
    } else {
        document.body.style.backgroundColor = "yellow";
    }

//display student id
    myStudentId.textContent = "Student ID: 200529109";
}

//function to change bg color to a random color between 1 n 100
function changeRandomColor() {
    const randomColorInput = Math.floor(Math.random() * 100) + 1;
    //checking input conditions n setting bg color accordingly
    if (randomColorInput < 0 || randomColorInput > 100) {
        document.body.style.backgroundColor = "red";
    } else if (randomColorInput >= 0 && randomColorInput <= 20) {
        document.body.style.backgroundColor = "green";
    } else if (randomColorInput > 20 && randomColorInput <= 40) {
        document.body.style.backgroundColor = "blue";
    } else if (randomColorInput > 40 && randomColorInput <= 60) {
        document.body.style.backgroundColor = "orange";
    } else if (randomColorInput > 60 && randomColorInput <= 80) {
        document.body.style.backgroundColor = "purple";
    } else {
        document.body.style.backgroundColor = "yellow";
    }
    //display student id once again
    myStudentId.textContent = "Student ID: 200529109";
}

//function to generate options for select list
function addList() {
    const options = [
        "img1.jpg",
        "img2.jpg",
        "img3.jpg",
        "img4.jpg",
        "img5.jpg"
    ];

    options.forEach((option) => {
        const newOption = document.createElement("option");
        newOption.value = option;
        newOption.textContent = option;
        imageSelect.appendChild(newOption);
    });
}

//function to change image
function changeImage() {
    const selectedImage = imageSelect.value;
    images.src = "img/" + selectedImage; // Assuming images are in an "img" folder.
}

//event listener for when the page loads to populate the select list
window.addEventListener("load", addList);

//event listeners for on click event of buttons n select
custColorButton.addEventListener("click", changeCustomColor);
randColorButton.addEventListener("click", changeRandomColor);

//event listeners for on change event of select
imageSelect.addEventListener("change", changeImage);