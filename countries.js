const searchbox = document.querySelector(".search-input");
const darkmode = document.querySelector(".darkmode");
const selectbox = document.querySelector("select");
const container = document.querySelector("main");
window.onload = function() {
    function getAll() {
        container.innerHTML = ""
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                var allholder = document.createElement("div");
                allholder.className ="ally"
                allholder.innerHTML = `
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
            container.appendChild(allholder)
            });
            
        })
    }
    getAll();
  searchbox.addEventListener("input", function(e) {
      let name = e.target.value;
      if(name == "") {
        getAll()
      } else {
          container.innerHTML = ""
      console.log(name)
      fetch(`https://restcountries.eu/rest/v2/name/${name}`)
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
        var filter = document.createElement("div");
        filter.className = "filt"
        filter.innerHTML = `
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
      container.appendChild(filter)
    });
    
  })
}
      
})
selectbox.addEventListener("change", function (e) {
        let reg = e.target.value
        if (reg == "") {
            getAll()
        }
        container.innerHTML = ""
      console.log(name)
      fetch(`https://restcountries.eu/rest/v2/region/${reg}`)
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
        var region = document.createElement("div");
        region.className = "reg"
        region.innerHTML = `
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
      container.appendChild(region)
    });
    
  })
    })
}

