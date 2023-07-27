
let btn = document.querySelector("button");

btn.addEventListener('click' , rst);

function rst() {
                
    let val = document.querySelector("#input").value;
    let rtn = document.querySelector("#result");

    let txt = val.split(" ").map(word => word.split("").reverse().join("")).join(" ")
    console.log(txt);
    var rt = txt == val?  "Its palindrome": "not a palindrome";
    rtn.innerHTML= rt;
    };


