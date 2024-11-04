function startScan() {
    console.log("Starting scan...");  // Debugging line
    document.getElementById("warningSign").style.display = "block";
    const siren = document.getElementById("sirenSound");

    siren.play().catch(error => console.log("Audio playback failed:", error));

    const messages = [
        "Initializing scan...",
        "Triangulating coordinates for spoiled white people...",
        "Searching for cultural vibrancy...",
        "Avoiding locals at all costs...",
        "Prepare for fancy drinks...",
        "Almost there..."
    ];

    let messageIndex = 0;
    const messageElement = document.getElementById("loadingMessage");

    // Cycle through messages every 2 seconds
    const messageInterval = setInterval(() => {
        console.log("Displaying message:", messages[messageIndex]);  // Debugging line
        messageElement.textContent = messages[messageIndex];
        messageIndex++;

        if (messageIndex >= messages.length) {
            clearInterval(messageInterval);
            messageElement.textContent = "Rooftop bar found! 🍸";
            console.log("Scan complete, showing 'Show Results' button");  // Debugging line

            // Show the "Show Results" button
            document.getElementById("showResultsButton").style.display = "block";
        }
    }, 2000);
}

// Function to show the funny image
function showResults() {
    console.log("Showing results...");  // Debugging line
    window.location.href = "https://your-image-url.com"; // Replace with the actual URL to the funny image
}
