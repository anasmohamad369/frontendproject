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
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('movieSearch');
    
    if (!searchInput) {
        console.error('Search input element not found');
        return;
    }

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        const movies = document.querySelectorAll('.sub-movie-list');
        
        if (movies.length === 0) {
            console.error('No movie elements found');
        }

        movies.forEach(function(movie) {
            const titleElement = movie.querySelector('.movie-title');
            
            if (!titleElement) {
                console.error('Movie title element not found in', movie);
                return;
            }
            
            const titleText = titleElement.textContent.toLowerCase();
            if (titleText.includes(query)) {
                movie.style.display = 'block';
                movie.style.classname="sub-movie-list";
            } else {
                movie.style.display = 'none';
            }
        });
    });
});

window.addEventListener('load', function() {
    // Check if the page was reloaded (not a first visit)
    if (performance.navigation.type === performance.navigation.
        TYPE_RELOAD) {
        // Redirect to index.html
        window.location.href = './index.html';
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


