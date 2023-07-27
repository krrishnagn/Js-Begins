
let btn = document.querySelector("button");


let dev =document.createElement("dev");
dev.id = "result";
dev.style.paddingTop = "5px"
document.getElementById("wrapper").append(dev);

btn.addEventListener('click', cal)

function cal(){
    let unit = Number(document.querySelector("#input").value);
    let prize = 0;
    if(unit <= 50)
        prize = unit*0.75;
    else if(unit > 50 && unit <=100)
        prize = (50*0.75)+((unit - 50)*1);
    else
        prize = 100;
    result.innerHTML = "Your EB Amount is " + prize;
}

