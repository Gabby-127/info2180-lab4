document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("searchButton");
  const searchInput = document.getElementById('searchInput');
  const resultDiv = document.getElementById('result');

  searchButton.addEventListener("click", function () {
    searchSuperheroes();
  });

  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        searchSuperheroes();
    }
});


    function searchSuperheroes() {
        const query = searchInput.value.trim();

        let url = "superheroes.php";
        if (query !== "") {
            url += "?query=" + encodeURIComponent(query);
        }

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                console.error("Error:", error);
                resultDiv.innerHTML = '<p class="errorMessage">An error occurred while fetching data.</p>';
            });
    }

});
