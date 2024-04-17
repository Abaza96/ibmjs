// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Task 6: Fetch recommendations data from the JSON file
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            console.log(data.recommendations); // Log the recommendations data
            // You can now use this data to display recommendations on your website
        })
        .catch(error => console.error('Error fetching data:', error));

    // Task 7: Handle search input and keyword variations
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    searchButton.addEventListener('click', () => {
        const userInput = searchInput.value.toLowerCase();
        // Now userInput contains the lowercase version of the entered keyword
        // Implement logic to filter recommendations based on userInput
    });

    // Task 8: Display recommendations dynamically
    const beachRecommendations = document.getElementById('beach-recommendations');
    const templeRecommendations = document.getElementById('temple-recommendations');
    const countryRecommendations = document.getElementById('country-recommendations');

    // Assuming you have an array of recommendations from the JSON data
    data.recommendations.forEach(recommendation => {
        if (recommendation.keyword === 'beach') {
            beachRecommendations.innerHTML += `
                <div class="recommendation">
                    <img src="${recommendation.imageUrl}" alt="Beach">
                    <p>${recommendation.description}</p>
                </div>
            `;
        } else if (recommendation.keyword === 'temple') {
            // Similar logic for temples
        } else if (recommendation.keyword === 'country') {
            // Similar logic for countries
        }
    });

    // Task 9: Clear button functionality
    function clearResults() {
        beachRecommendations.innerHTML = '';
        templeRecommendations.innerHTML = '';
        countryRecommendations.innerHTML = '';
        searchInput.value = ''; // Clear the search input
    }

    // Task 10 (Optional): Display time in a specific country
    const newYorkTime = new Date().toLocaleTimeString('en-US', {
        timeZone: 'America/New_York',
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    console.log("Current time in New York:", newYorkTime);
    // You can display this time on your website as needed
});
