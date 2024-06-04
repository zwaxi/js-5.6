let colorBg = prompt("Xoxlagan  orqa fon rangni kiriting")
let textColor = prompt("Xoxlagan text rangnini kiriting")

let bodyMain = document.querySelector("body")

let texts = document.createElement("p")
texts.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsam, corporis ipsum repellendus temporibus quam accusantium. Incidunt harum libero eaque, distinctio excepturi modi est error iure amet Dolores cupiditate veniam";
texts.style.color = textColor;
texts.style.backgroundColor = colorBg;
bodyMain.appendChild(texts)


console.log(bodyMain);