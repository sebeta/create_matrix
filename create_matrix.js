const createMatrix = (row, col) => {
    let element = document.getElementById('container')
    let html = "<table>"
    for (let i = 0; i < row; i++) {
        html += "<tr>" + "<td></td>".repeat(col) + "</tr>"
    }
    html += "</table>"
    element.innerHTML = html
}

let rows = parseInt(prompt('Please enter the number of rows:'))
let columns = parseInt(prompt('Please enter the number of columns:'))
createMatrix(rows, columns)