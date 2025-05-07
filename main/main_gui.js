// Create button element
const button = document.createElement("button");
button.textContent = "Load Script";
button.style.position = "fixed";
button.style.top = "20px";
button.style.right = "20px";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.backgroundColor = "#007bff";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.3)";
button.style.transition = "0.3s";

// Add hover effect
button.onmouseover = () => button.style.backgroundColor = "#0056b3";
button.onmouseout = () => button.style.backgroundColor = "#007bff";

// Add functionality to load external script
button.onclick = () => {
    const script = document.createElement("script");
    script.src = "https://github.com/EXTREME-youtube/blooket-hacks/blob/main/main/getallblooks.js"; // Replace with actual GitHub raw URL
    document.body.appendChild(script);
    alert("Script loaded!");
};

// Append button to document
document.body.appendChild(button);
