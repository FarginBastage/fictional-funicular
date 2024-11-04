function startScan() {
    document.getElementById("warningSign").style.display = "block";
    const siren = document.getElementById("sirenSound");
    siren.play();

    const messages = [
        "Initializing scan...",
        "Scanning for rooftop bars...",
        "Locating poshest spots...",
        "Prepare for fancy drinks...",
        "Almost there..."
    ];

    let messageIndex = 0;
    const messageElement = document.getElementById("loadingMessage");

    // Cycle through messages every 2 seconds
    const messageInterval = setInterval(() => {
        messageElement.textContent = messages[messageIndex];
        messageIndex++;

        if (messageIndex >= messages.length) {
            clearInterval(messageInterval);
            messageElement.textContent = "Rooftop bar found! 🍸";

            // Show the "Show Results" button
            document.getElementById("showResultsButton").style.display = "block";
        }
    }, 2000);
}

// Function to show the funny image
function showResults() {
    window.location.href = "https://your-image-url.com"; // Replace with the actual URL to the funny image
}
