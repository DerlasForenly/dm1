let result_div = document.getElementById('result_div')
let a_input = document.getElementById('a')
let b_input = document.getElementById('b')
let operation = document.getElementById('operation')

function render_result(result) {
    deleteChilds(result_div)
    let label = document.createElement('label')
    if (result === false) label.textContent = "false"
    else if (result === true) label.textContent = "true"
    else {
        if (result.length === 0) label.textContent = "Set is empty"
        else for (let e of result) label.textContent += e + " "
    }
    result_div.appendChild(label)
}

function delete_empty(arr) {
    let new_arr = []
    for (let e of arr) if (e != '') new_arr.push(e)
    return new_arr
}

function deleteChilds(element) {
    while (element.firstChild) element.removeChild(element.firstChild)
}
