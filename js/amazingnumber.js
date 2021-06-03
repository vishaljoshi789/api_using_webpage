let numcontent = document.getElementById("numcontent");
fetchingfact = (number) => {
    fetch(`http://numbersapi.com/${number}`).then(response => response.text()).then(data => facts(data, number))
}
generatingrandomfacts = () => {
    fact = ""
    for (i = 0; i < 30; i++) {
        num = []
        let number = Math.floor(Math.random() * (100 - 1) + 1)
        num.push(number)
        if (number in num) {
            continue
        } else {
            fetchingfact(number)
        }
    }
}

function facts(data, number) {
    fact = document.createElement("div")
    fact.setAttribute("class", "card m-5")
    fact.setAttribute("style", "width: 18rem")
    factcontent = document.createElement("div")
    factheading = document.createElement("h5")
    factheading.setAttribute("class", "card-title")
    factheading.appendChild(document.createTextNode(`Number ${number}`))
    factcontent.appendChild(factheading)
    hr = document.createElement("hr")
    factcontent.appendChild(hr)
    factinfo = document.createElement("p")
    factinfo.setAttribute("class", "card-text")
    factinfo.appendChild(document.createTextNode(`${data}`))
    factcontent.appendChild(factinfo)
    fact.appendChild(factcontent)
    numcontent.appendChild(fact)
}

searchbtnclicked = () => {
    document.querySelector(".footer").setAttribute("style", "position:fixed;")
    let searchinput = document.getElementById("searchinput")
    numcontent.innerHTML = ""
    if (searchinput.value != "") {
        fetchingfact(searchinput.value)
    } else {
        generatingrandomfacts()
    }
}
generatingrandomfacts()