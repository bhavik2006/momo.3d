document.addEventListener("DOMContentLoaded", function () {
    let audio = new Audio("./music/lo.mp3"); // Apne song ka path yaha daalo
    let isPlaying = false;
    
    // Auto play on page load
    audio.play().catch(error => console.log("Autoplay blocked by browser:", error));

    // Toggle button for play/pause
    let button = document.createElement("button");
    button.textContent = "Play/Pause Music";
    button.style.position = "absolute";
    button.style.bottom = "20px";
    button.style.padding = "10px 20px";
    button.style.border = "none";
    button.style.background = "#ff00ff";
    button.style.color = "#fff";
    button.style.fontSize = "16px";
    button.style.cursor = "pointer";
    button.style.borderRadius = "10px";

    button.addEventListener("click", function () {
        if (isPlaying) {
            audio.pause();
            button.textContent = "Play Music";
        } else {
            audio.play();
            button.textContent = "Pause Music";
        }
        isPlaying = !isPlaying;
    });

    document.body.appendChild(button);
});
