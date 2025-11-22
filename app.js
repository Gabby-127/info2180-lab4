document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("searchButton");

  searchButton.addEventListener("click", function () {
    fetch("superheroes.php")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        alert(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while fetching data.");
      });
  });
});
