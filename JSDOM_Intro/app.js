console.dir(document.getElementById("content"))

console.log(document.getElementsByClassName("para"))

const toggleImage = (a) => {
    let image = document.getElementById("hoff");   
    if (image.style.display === "none") {
        image.style.display = "block";} // Show the image    
       else {image.style.display = "none";}} // Hide the image  
       
const changeImage = (a) => {
    let image = document.getElementById("hoff");
    let newURL = document.getElementById("newURL");
    newURL = newURL.value
    image.src = newURL 
}

const text = document.getElementById("heading");
const newColour = document.getElementById("colourChangerInput");

changeColorButton.addEventListener("click", () => {
    text.style.color = newColour.value.toLowerCase();

});