"use strict";
(function(){

  const dateEl = document.getElementById("date");
      const apodImg = document.getElementById("apod-img");
      const explanationEl = document.getElementById("explanation");
      
      // Function to fetch the Astronomy Picture of the Day
      function getApod() {
        const apiKey = "DEMO_KEY";
        const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
        
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            // Update the elements with the returned data
            dateEl.textContent = data.date;
            apodImg.src = data.url;
            apodImg.alt = "Astronomy Picture of the Day";
            explanationEl.textContent = data.explanation;
          })
          .catch(error => console.error(error));
      }
      
      // Call the function to fetch the Astronomy Picture of the Day when the page loads
      getApod();

})();

