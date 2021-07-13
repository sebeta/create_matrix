const createMatrix = (row, col) => {
    let element = document.getElementById('container')
    let html = "<table>"
    for (let i = 0; i < row; i++) {
        html += "<tr>" + "<td></td>".repeat(col) + "</tr>"
    }
    html += "</table>"
    element.innerHTML = html
}

createMatrix(3, 3)