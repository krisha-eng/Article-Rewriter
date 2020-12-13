var btn = document.querySelector("#btn-rewrite");
var txt1 = document.querySelector("#txt-input");
var div = document.querySelector("#div-output")

btn.addEventListener("click", clickHandler);

function clickHandler(){
    var input = txt1.value;
    // console.log(input);
    fetch("https://api.funtranslations.com/translate/article_rewrite.json" + "?" + "text=" + input).then(response => response.json()).then(data =>  div.innerText = data.contents.translated).catch(err => alert(err +"occured please try after some time"));
}