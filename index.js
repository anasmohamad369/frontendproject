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
