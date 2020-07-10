const searchbox = document.querySelector(".search-input");
const darkmode = document.querySelector(".darkmode");
const selectbox = document.querySelector("#countries");
const container = document.querySelector("main");
const nav = document.querySelector("nav");
const body = document.querySelector("body");
const selectbar = document.querySelector(".select-bar");
const search = document.querySelector(".search-bar");
const example = document.querySelector(".country-example");
const option = document.querySelector("#option")
const icon = document.querySelector("#ico")

let clicked = false
darkmode.addEventListener("click", function() {
    clicked = !clicked;
    if(clicked == true) {
    body.classList.add("dark")
    icon.classList.add("darkicon")
const example = document.querySelectorAll(".country-example");
for (let g = 0; g < example.length; g++) {5
    example[g].classList.add("dark")
}
const country= document.querySelectorAll(".country-div");
for (let g = 0; g < country.length; g++) {
    country[g].classList.add("dark")
    country[g].style.border = "2px solid white"
}
const light = document.querySelectorAll(".light");
for (let k = 0; k < light.length; k++) {
    light[k].classList.add("light-dark")
}

}
else {
    body.classList.remove("dark")
    icon.classList.remove("darkicon")
const example = document.querySelectorAll(".country-example");
for (let g = 0; g < example.length; g++) {
    example[g].classList.remove("dark")
}
const country= document.querySelectorAll(".country-div");
for (let g = 0; g < country.length; g++) {
    country[g].classList.remove("dark")
    country[g].style.border = "none"
}
const light= document.querySelectorAll(".light");
for (let k = 0; k < light.length; k++) {
    light[k].classList.remove("light-dark")
}
}
})

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
            allholder.addEventListener("click", function() {
                container.classList.add("hide")
                search.classList.add("hide")
                selectbar.classList.add("hide");
                let hidden = document.createElement("div");
                hidden.className = "country-details";
                hidden.innerHTML = `<div>
                    <div class="back light">
                        <h2><i class="fas fa-arrow-left"></i> Back</h2>
                    </div>
                    <div class="hidden-flex">
                        <div class="hidden-flag">
                            <img src=${element.flag} width="100%"/>
                        </div>
                        <div class="hidden-details">
                            <h2>${element.name}</h2>
                            <div class="details-flex">
                                <div class="details-left">
                                    <p><strong>Native Name:</strong> ${element.capital}</p>
                                    <p><strong>Population:</strong> ${element.population}</p>
                                    <p><strong>Region:</strong> ${element.region}</p>
                                    <p><strong>Area:</strong> ${element.area}</p>
                                </div>
                                <div class="details-right">
                                    <p><strong>Capital:</strong> ${element.capital}</p>
                                    <p><strong>Calling code:</strong> ${element.callingCodes}</p>
                                    <p><strong>Numeric Code:</strong> ${element.numericCode}</p>
                                    <p><strong>Subregion:</strong> ${element.subregion}</p>
                                </div>
                            </div>
                            <div class="cur">
                                <span><strong>Currency:</strong> <span class="light">${element.currencies[0].code}</span></span> <span class="light">${element.currencies[0].name}</span> <span class="light">${element.currencies[0].symbol}</span>
                            </div>
                            <div class="long">
                                <span><strong>longitude:</strong> <span class="light">${element.latlng[1]}</span></span> <span class="light">latitude: <span>${element.latlng[0]}</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                `
               
                body.appendChild(hidden)
                if(clicked == true) {
                    const light = document.querySelectorAll(".light");
                    for (let k = 0; k < light.length; k++) {
                        light[k].classList.add("light-dark")
                    }
                }else {
                    const light = document.querySelectorAll(".light");
                    for (let k = 0; k < light.length; k++) {
                        light[k].classList.remove("light-dark")
                    }
                }
                document.querySelector(".back").addEventListener("click", function() {
                    body.removeChild(hidden);
                    container.classList.remove("hide")
                search.classList.remove("hide")
                selectbar.classList.remove("hide");
                
                })
            })
            
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
      filter.addEventListener("click", function() {
        container.classList.add("hide")
        search.classList.add("hide")
        selectbar.classList.add("hide");
        let hidden = document.createElement("div");
        hidden.className = "country-details";
        hidden.innerHTML = `<div>
            <div class="back light">
                <h2><i class="fas fa-arrow-left"></i> Back</h2>
            </div>
            <div class="hidden-flex">
                <div class="hidden-flag">
                    <img src=${element.flag} width="100%"/>
                </div>
                <div class="hidden-details">
                    <h2>${element.name}</h2>
                    <div class="details-flex">
                        <div class="details-left">
                            <p><strong>Native Name:</strong> ${element.capital}</p>
                            <p><strong>Population:</strong> ${element.population}</p>
                            <p><strong>Region:</strong> ${element.region}</p>
                            <p><strong>Area:</strong> ${element.area}</p>
                        </div>
                        <div class="details-right">
                            <p><strong>Capital:</strong> ${element.capital}</p>
                            <p><strong>Calling code:</strong> ${element.callingCodes}</p>
                            <p><strong>Numeric Code:</strong> ${element.numericCode}</p>
                            <p><strong>Subregion:</strong> ${element.subregion}</p>
                        </div>
                    </div>
                    <div class="cur">
                        <span><strong>Currency:</strong> <span class="light">${element.currencies[0].code}</span></span> <span class="light">${element.currencies[0].name}</span> <span class="light">${element.currencies[0].symbol}</span>
                    </div>
                    <div class="long">
                        <span><strong>longitude:</strong> <span class="light">${element.latlng[1]}</span></span> <span class="light">latitude: <span>${element.latlng[0]}</span></span>
                    </div>
                </div>
            </div>
        </div>
        `
        body.appendChild(hidden)
        if(clicked == true) {
            const light = document.querySelectorAll(".light");
            for (let k = 0; k < light.length; k++) {
                light[k].classList.add("light-dark")
            }
        }else {
            const light = document.querySelectorAll(".light");
            for (let k = 0; k < light.length; k++) {
                light[k].classList.remove("light-dark")
            }
        }
        document.querySelector(".back").addEventListener("click", function() {
            body.removeChild(hidden);
            container.classList.remove("hide")
        search.classList.remove("hide")
        selectbar.classList.remove("hide");

        })
    })
      container.appendChild(filter)
    });
    
    if(clicked == true) {
        body.classList.add("dark")
        icon.classList.add("darkicon")
    const example = document.querySelectorAll(".country-example");
    for (let g = 0; g < example.length; g++) {
        example[g].classList.add("dark")
    }
    const country= document.querySelectorAll(".country-div");
    for (let g = 0; g < country.length; g++) {
        country[g].classList.add("dark")
        country[g].style.border = "2px solid white"
    }
    const light = document.querySelectorAll(".light");
    for (let k = 0; k < light.length; k++) {
        light[k].classList.add("light-dark")
    }
    
    }
    else {
        body.classList.remove("dark")
        icon.classList.remove("darkicon")
    const example = document.querySelectorAll(".country-example");
    for (let g = 0; g < example.length; g++) {
        example[g].classList.remove("dark")
    }
    const country= document.querySelectorAll(".country-div");
    for (let g = 0; g < country.length; g++) {
        country[g].classList.remove("dark")
        country[g].style.border = "none"
    }
    const light= document.querySelectorAll(".light");
    for (let k = 0; k < light.length; k++) {
        light[k].classList.remove("light-dark")
    }
    }
        
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
      region.addEventListener("click", function() {
        container.classList.add("hide")
        search.classList.add("hide")
        selectbar.classList.add("hide");
        let hidden = document.createElement("div");
        hidden.className = "country-details";
        hidden.innerHTML = `<div>
            <div class="back light">
                <h2><i class="fas fa-arrow-left"></i> Back</h2>
            </div>
            <div class="hidden-flex">
                <div class="hidden-flag">
                    <img src=${element.flag} width="100%"/>
                </div>
                <div class="hidden-details">
                    <h2>${element.name}</h2>
                    <div class="details-flex">
                        <div class="details-left">
                            <p><strong>Native Name:</strong> ${element.capital}</p>
                            <p><strong>Population:</strong> ${element.population}</p>
                            <p><strong>Region:</strong> ${element.region}</p>
                            <p><strong>Area:</strong> ${element.area}</p>
                        </div>
                        <div class="details-right">
                            <p><strong>Capital:</strong> ${element.capital}</p>
                            <p><strong>Calling code:</strong> ${element.callingCodes}</p>
                            <p><strong>Numeric Code:</strong> ${element.numericCode}</p>
                            <p><strong>Subregion:</strong> ${element.subregion}</p>
                        </div>
                    </div>
                    <div class="cur">
                        <span><strong>Currency:</strong> <span class="light">${element.currencies[0].code}</span></span> <span class="light">${element.currencies[0].name}</span> <span class="light">${element.currencies[0].symbol}</span>
                    </div>
                    <div class="long">
                        <span><strong>longitude:</strong> <span class="light">${element.latlng[1]}</span></span> <span class="light">latitude: <span>${element.latlng[0]}</span></span>
                    </div>
                </div>
            </div>
        </div>
        `
        body.appendChild(hidden)
        if(clicked == true) {
            const light = document.querySelectorAll(".light");
            for (let k = 0; k < light.length; k++) {
                light[k].classList.add("light-dark")
            }
        }else {
            const light = document.querySelectorAll(".light");
            for (let k = 0; k < light.length; k++) {
                light[k].classList.remove("light-dark")
            }
        }
        document.querySelector(".back").addEventListener("click", function() {
            body.removeChild(hidden);
            container.classList.remove("hide")
        search.classList.remove("hide")
        selectbar.classList.remove("hide");

        })
    })
      container.appendChild(region)
    });
    if(clicked == true) {
        body.classList.add("dark")
        icon.classList.add("darkicon")
    const example = document.querySelectorAll(".country-example");
    for (let g = 0; g < example.length; g++) {
        example[g].classList.add("dark")
    }
    const country= document.querySelectorAll(".country-div");
    for (let g = 0; g < country.length; g++) {
        country[g].classList.add("dark")
        country[g].style.border = "2px solid white"
    }
    const light = document.querySelectorAll(".light");
    for (let k = 0; k < light.length; k++) {
        light[k].classList.add("light-dark")
    }
    
    }
    else {
        body.classList.remove("dark")
        icon.classList.remove("darkicon")
    const example = document.querySelectorAll(".country-example");
    for (let g = 0; g < example.length; g++) {
        example[g].classList.remove("dark")
    }
    const country= document.querySelectorAll(".country-div");
    for (let g = 0; g < country.length; g++) {
        country[g].classList.remove("dark")
        country[g].style.border = "none"
    }
    const light= document.querySelectorAll(".light");
    for (let k = 0; k < light.length; k++) {
        light[k].classList.remove("light-dark")
    }
    }
  })
    })



}

