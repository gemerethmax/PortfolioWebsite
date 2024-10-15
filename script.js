// Function to change the style of the "me" image when clicked
function changeStyle() {
    const image = document.getElementById("me");
    
    // Toggle between two different styles
    if (image.classList.contains("style1")) {
        image.classList.remove("style1");
        image.classList.add("style2");
    } else {
        image.classList.remove("style2");
        image.classList.add("style1");
    }
}

// Add event listener to the image
document.getElementById("me").addEventListener("click", changeStyle);