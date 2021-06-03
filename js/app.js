let autotype = document.getElementById("autotype");
let text = "Created by : Vishal Joshi";
let textx = "";
let index = 0;
(function autotypef() {

    textx = text.slice(0, ++index);
    autotype.innerText = textx;
    setTimeout(autotypef, 1000);
})();