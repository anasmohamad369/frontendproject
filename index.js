document.getElementById('citySelect').addEventListener('change', function() {
    const selectedCity = this.value;

    switch (selectedCity) {
        case 'Mumbai':
            window.location.href = "./mumbai.html";
            break;
        case 'Hyderabad':
            window.location.href = "./hyderbad.html";
               break;
        case 'Bhimavaram':
            window.location.href = "./bhimavaram.html";
                break;
        case 'Chennai':
            window.location.href = "./chennai.html"
             break;
        default:
            // Default content or action
            break;
    }
});
function show() {
    var citiesDisplay = document.getElementById("cities-display");
    if (citiesDisplay.style.display === "none" || citiesDisplay.style.display === "") {
        citiesDisplay.style.display = "block"; // Show the content
    } else {
        citiesDisplay.style.display = "none"; // Hide the content
    }
}


