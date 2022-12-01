let state = Array(6).fill('').map(el=>Array(7).fill(''))
setInterval("randomPieces(state)", 1000)
function showBoard () {
    for (let i = 0; i < state.length; i++) 
    {
      for (let j = 0; j < state[0].length; j++)
      {
        if (state[i][j] === 'b')
        {
          document.getElementsByClassName("board")[0].appendChild(
            elt("div", { class: "field"}, 
                elt("div", { class: "blue piece"}))
          )
        } else if (state[i][j] === 'r')
        {
          document.getElementsByClassName("board")[0].appendChild(
            elt("div", { class: "field"}, 
                elt("div", { class: "red piece"}))
          )
        } else
        {
          document.getElementsByClassName("board")[0].appendChild(
            elt("div", { class: "field"})
          )
        }
      }
    }   
}

    function redrawBoard() {
        let board = document.getElementsByClassName("board")[0]
        while (board.lastChild) 
        {
          board.removeChild(board.lastChild)
        }
        showBoard()
    }
      
function showBoardInterval() {
setInterval(showBoard(), 1000)
}

function randomPieces(state) {
    let row = Math.trunc(Math.random() * state.length)
    let column = Math.trunc(Math.random() * state[0].length)
    switch (Math.trunc(Math.random() * 3))
    {
        case 0:
        state[row][column] = 'b'
        break;
        case 1:
        state[row][column] = 'r'
        break;
        case 2:
        state[row][column] = ''
        break;
    }
}

function elt (type, attrs, ...children) {
    let node = document.createElement(type)
    for (a in attrs)
    {
        node.setAttribute(a, attrs[a])
    }
    for (let child of children) 
    {
        if (typeof child != "string")
        { node.appendChild(child)
        }
        else 
        {
        node.appendChild(document.createTextNode(child))
        }
    }
    return node
}    

