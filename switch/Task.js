let quali = ["high school" , "UG" , "PG" , "Work"]


for(let degree in quali)
{
var dev = document.createElement("input");
dev.type = "Radio";
dev.value = degree
var dev2 = document.createElement("label")
dev2.for = degree;
dev2.innerHTML = degree

document.querySelector(".inputdiv").appendChild(dev);
}


let radio = document.getElementsByClassName("inputdiv");
console.log(radio);