// api_key = 5dOtVzFfpMmcQJwEA7dgDPzkaTGt0Lqe9Rf9JdGe
// https://api.nasa.gov/planetary/apod?api_key=5dOtVzFfpMmcQJwEA7dgDPzkaTGt0Lqe9Rf9JdGe
maincontent = document.getElementById("maincontent");
fetch("https://api.nasa.gov/planetary/apod?api_key=5dOtVzFfpMmcQJwEA7dgDPzkaTGt0Lqe9Rf9JdGe").then(response => response.json()).then(data => console.log(data.explanation))