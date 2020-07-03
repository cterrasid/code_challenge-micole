class ApiRequest {
  createUrl(parameter) {
    let proxy = "https://cors-anywhere.herokuapp.com/";
    let endpoint = "https://www.micole.net/api/regions/";
    let url = proxy + endpoint + parameter;
    return url;
  }

  createToken() {
    let username = "micoleAPI";
    let password = "M9^&yAzHTvVedh4=";
    let token = btoa(`${username}:${password}`);
    return token;
  }
}

class Cities {
  getLastVowelCity(city) {
    const lastCharacter = city.slice(-1);
    const match = lastCharacter.match(/[aeiou](?!,*[aeiou])/i);
    return match ? true : false;
  }

  createCitiesList(citiesList) {
    if (regionName !== "") {
      citiesList.forEach(city => {
        let cityName = `<h5 class="card-title">${city}</h5>`;
        let region = `<h6 class="card-subtitle mb-2 text-muted">${regionName}</h6>`;
        let listItem = `<li class="list-group-item">${cityName}${region}</li>`;
        let listGroup = `<ul class="list-group">${listItem}</ul>`;
        let cardBody = `<section class="card-body">${listGroup}</section>`;

        cardContainer.append(cardBody);
        mainContainer.append(cardContainer);
      });
    }
  }
}
