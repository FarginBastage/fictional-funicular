function startScan() {
    document.getElementById("warningSign").style.display = "block";
    const siren = document.getElementById("sirenSound");
    siren.play();

    const messages = [
        "Initializing scan...",
        "Scanning for rooftop bars...",
        "Locating poshest spots...",
        "Preparing for fancy drinks...",
        "This 25 dollar whiskey and coke will be worth it...",
        "Triangulating locations for snobby white people...",

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
        }
    }, 2000);
}
