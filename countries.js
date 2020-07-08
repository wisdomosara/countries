const searchbox = document.querySelector(".search-input");
const darkmode = document.querySelector(".darkmode");
const selectbox = document.querySelector("select");
const container = document.querySelector("main");

    fetch('https://restcountries.eu/rest/v2/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {  
        let countries = document.createElement("div")
        countries.innerHTML += `
            <div class="country-div">
                <div class="img-div">
                    <img src=${element.flag} width="100%" height="100%" >
                </div>
                <div class="country-example">
                    <h4>${element.name}</h4>
                    <p><strong>Population:</strong> ${element.population}</p>
                    <p><strong>Region:</strong> ${element.region}</p>
                    <p><strong>Capital:</strong> ${element.capital}</p>
                </div>
            </div>
      `
       container.appendChild(countries)
    });
    
  })
