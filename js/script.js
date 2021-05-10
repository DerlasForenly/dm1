calculate.onclick = () => {
    let result
    let a = a_input.value.split(' ')
    let b = b_input.value.split(' ')

    a = delete_empty(a)
    b = delete_empty(b)

    a.sort()
    b.sort()

    console.log(a)
    console.log(b)

    switch (operation.value) {
        case "A⊂B":
            result = entry(a, b)
            break
        case "B⊂A":
            result = entry(b, a)
            break
        case "A∪B":
            result = sum(a, b)
            break
        case "A∩B":
            result = intersection(a, b)
            break
        case "A\\B":
            result = difference(a, b)
            break
        case "B\\A":
            result = difference(b, a)
            break
        case "AΔB":
            result = symmetric_difference(a, b)
            break
    }
    
    render_result(result)
}