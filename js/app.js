// seleting the container to place our news
let newsContent = document.getElementById("newsContent");
// newsContent.innerHTML = `<div class="card m-5" style="width: 18rem;">
//                 <img src="..." class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">Card title</h5>
//                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     <a href="#" class="btn btn-primary">Go somewhere</a>

//                 </div>
//             </div>`

// variables
let api_key = '6525ec894ed8465ca3fbd521ec7a7108'

// creating a new xhr Object
news = new XMLHttpRequest()

// creating get request
news.open("GET", `https://newsapi.org/v2/top-headlines?country=in&apiKey=6525ec894ed8465ca3fbd521ec7a7108`, true);
// news.getResponseHeader('Content-type', 'application/json')

// function to be done after loding
news.onload = () => {
    console.log(JSON.parse(this.responseText))

}
news.send();