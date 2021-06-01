// seleting the container to place our news
let numcontent = document.getElementById("numcontent");
// numcontent.innerHTML = `<div class="card m-5" style="width: 18rem;">
//                 <img src="..." class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">Card title</h5>
//                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     <a href="#" class="btn btn-primary">Go somewhere</a>

//                 </div>
//             </div>`

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

    let searchinput = document.getElementById("searchinput")
    numcontent.innerHTML = ""
    if (searchinput.value != "") {
        fetchingfact(searchinput.value)
    } else {
        generatingrandomfacts()
    }

}
generatingrandomfacts()