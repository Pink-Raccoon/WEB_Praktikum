function showBoard(){
    createBoard(6,7)
}
function createBoard(height,width){
    for(let i = 0;i<height;i++)
    {
        for(let j = 0; j<width; j++)
        {
            document.getElementsByClassName("board")[0].appendChild(
                elt("div", { class: "field"}))    
        }
    }
}
function addRandomTokens() {
  for (let i = 0; i < 4; i++) {
    document.getElementsByClassName("board")[0]
      .childNodes[Math.trunc(Math.random()*42)].appendChild(
        elt("div", { class: "blue piece"})
    )
    document.getElementsByClassName("board")[0]
      .childNodes[Math.trunc(Math.random()*42)].appendChild(
        elt("div", { class: "red piece"})
    )
  }
}

function elt (type, attrs, ...children) {
    let node = document.createElement(type)
    for (a in attrs) {
      node.setAttribute(a, attrs[a])
    }
    for (let child of children) {
      if (typeof child != "string") node.appendChild(child)
      else node.appendChild(document.createTextNode(child))
    }
    return node
  }

showBoard()
addRandomTokens()