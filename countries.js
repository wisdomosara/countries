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
    selectbar.classList.add("dark")
selectbox.classList.add("dark")
search.classList.add("dark")
searchbox.classList.add("dark")
option.classList.add("dark")
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
nav.classList.add("dark")
}
else {
    body.classList.remove("dark")
    selectbar.classList.remove("dark")
    selectbox.classList.remove("dark")
    search.classList.remove("dark")
    searchbox.classList.remove("dark")
    option.classList.remove("dark")
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
nav.classList.remove("dark")
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
            container.appendChild(allholder)
            });
                
            
                if(clicked == true) {
                    body.classList.add("dark")
                    selectbar.classList.add("dark")
                    selectbox.classList.add("dark")
                    search.classList.add("dark")
                    searchbox.classList.add("dark")
                    option.classList.add("dark")
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
                nav.classList.add("dark")
                }
                else {
                    body.classList.remove("dark")
                    selectbar.classList.remove("dark")
                    selectbox.classList.remove("dark")
                    search.classList.remove("dark")
                    searchbox.classList.remove("dark")
                    option.classList.remove("dark")
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
                nav.classList.remove("dark")
                }
                
            
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
    
    
        if(clicked == true) {
            body.classList.add("dark")
            selectbar.classList.add("dark")
            selectbox.classList.add("dark")
            search.classList.add("dark")
            searchbox.classList.add("dark")
            option.classList.add("dark")
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
        nav.classList.add("dark")
        }
        else {
            body.classList.remove("dark")
            selectbar.classList.remove("dark")
            selectbox.classList.remove("dark")
            search.classList.remove("dark")
            searchbox.classList.remove("dark")
            option.classList.remove("dark")
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
        nav.classList.remove("dark")
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
      container.appendChild(region)
    });
    if(clicked == true) {
        body.classList.add("dark")
        selectbar.classList.add("dark")
        selectbox.classList.add("dark")
        search.classList.add("dark")
        searchbox.classList.add("dark")
        option.classList.add("dark")
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
    nav.classList.add("dark")
    }
    else {
        body.classList.remove("dark")
        selectbar.classList.remove("dark")
        selectbox.classList.remove("dark")
        search.classList.remove("dark")
        searchbox.classList.remove("dark")
        option.classList.remove("dark")
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
    nav.classList.remove("dark")
    }
  })
    })

}

