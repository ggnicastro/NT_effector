document.addEventListener("DOMContentLoaded", function() {
    const magnifyButton = document.getElementById("magnify-button");
    const resizableFigure = document.querySelector(".resizable-figure");
    
    let zoomedIn = false;

    magnifyButton.addEventListener("click", function() {
        if (zoomedIn) {
            // Reset to the original size
            resizableFigure.style.width = "90%"; // Change the initial width to 90%
            zoomedIn = false;
        } else {
            // Zoom in
            resizableFigure.style.width = "250%"; // Adjust to the desired zoomed-in width
            zoomedIn = true;
        }
    });
});

