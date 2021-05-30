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
// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function() {
//     if (this.readyState === this.DONE) {
//         console.log(this.responseText);
//     }
// });

// xhr.open("GET", "https://free-news.p.rapidapi.com/v1/search?q=Elon%20Musk&lang=en");
// xhr.setRequestHeader("x-rapidapi-key", "5ff957dda0msh24870c38c07cecap142ec3jsnfeb44bc4b0e4");
// xhr.setRequestHeader("x-rapidapi-host", "free-news.p.rapidapi.com");

// xhr.send(data);

fetch("https://free-news.p.rapidapi.com/v1/search?q=corona&lang=en", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "5ff957dda0msh24870c38c07cecap142ec3jsnfeb44bc4b0e4",
            "x-rapidapi-host": "free-news.p.rapidapi.com"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });