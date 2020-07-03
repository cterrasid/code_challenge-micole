let regionName = "";
let citiesList = [];
let filteredCities = [];

let buttonAllCities = $("button.btn-all");
let buttonClearCities = $("button.btn-clear");
let buttonSearchCities = $("button.btn-search");
let inputSearchCities = $("input.form-control");
let inputSearchCitiesValue = "";
let mainContainer = $("section.container-fluid");
let cardContainer = $("section.card");

$(document).ready(() => {
  const citiesUtilities = new Cities();
  getRegions();

  buttonAllCities.on("click", () => {
    if (cardContainer.innerHTML !== "") {
      cardContainer.empty();
    }

    citiesUtilities.createCitiesList(citiesList);
  });

  buttonClearCities.on("click", () => {
    cardContainer.empty();
  });

  inputSearchCities.on("keyup", () => {
    inputSearchCitiesValue = inputSearchCities.val().toLowerCase();
  });

  buttonSearchCities.on("click", () => {
    cardContainer.empty();
    $.grep(citiesList, item => {
      let city =
        item.toLowerCase().indexOf(inputSearchCitiesValue) > -1 ? item : null;

      if (city !== null) {
        filteredCities.push(city);
      }
    });
    citiesUtilities.createCitiesList(filteredCities);
    inputSearchCities.val("");
  });
});
