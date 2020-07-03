const getRegions = () => {
  const requestUtilities = new ApiRequest();

  $.ajax({
    type: "GET",
    url: requestUtilities.createUrl(""),
    dataType: "json",
    crossDomain: true,
    headers: { Authorization: `Basic ${requestUtilities.createToken()}` }
  }).done(regions => {
    try {
      $.grep(regions, region => {
        if (region.name === "Madrid") {
          getCities(region.id);
          regionName = region.name;
        }
      });
    } catch (e) {
      console.log(e);
    }
  });
};

const getCities = regionId => {
  const requestUtilities = new ApiRequest();
  const citiesUtilities = new Cities();

  $.ajax({
    type: "GET",
    url: requestUtilities.createUrl(regionId),
    dataType: "json",
    crossDomain: true,
    headers: { Authorization: `Basic ${requestUtilities.createToken()}` }
  }).done(cities => {
    try {
      cities.forEach(city => {
        if (citiesUtilities.getLastVowelCity(city.name) === true) {
          citiesList.push(city.name);
        }
      });
    } catch (e) {
      console.log(e);
    }
  });
};
