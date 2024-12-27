//Create Paragraph Element
let para = document.createElement("p");
para.innerText = "This is paragraph element";

//Append to body
document.body.appendChild(para);

//Create Div
let div = document.createElement("div");
div.innerHTML = "This is <b>Div</b>";
div.style.height = "100px";
div.style.width = "100px";
div.style.backgroundColor = "yellow";
div.style.border = "2px solid black";

//Append to body
document.body.appendChild(div);
