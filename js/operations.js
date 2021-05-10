function entry(a, b) {
    for (let e of a) if (!b.includes(e)) return false
    return true
}

function sum(a, b) {
    let r = []
    a.filter((value, index, arr) => arr.indexOf(value) === index)
    b.filter((value, index, arr) => arr.indexOf(value) === index)
    a.sort()
    b.sort()

    let n = a.length
    let m = b.length
    let i = 0
    let k = 0
    let j = 0

	while ((i < n) && (j < m)) {
		if (a[i] == b[j]) { 
			r[k] = a[i]
			k++
            i++
            j++
		} 
        else {
			if (a[i] < b[j]) {
				r[k] = a[i]
				k++
				i++
			} 
            else {
				r[k] = b[j]
				k++
				j++
			}
		}
	}

	while (i < n) {
		r[k] = a[i]
		k++
        i++
	}
	while (j < m) {
		r[k] = b[j]
		k++
        j++
	}

    return r;
}

function intersection(a, b) {
    let r = []
    a.filter((value, index, arr) => arr.indexOf(value) === index)
    b.filter((value, index, arr) => arr.indexOf(value) === index)
    a.sort()
    b.sort()

    let n = a.length
    let m = b.length
    let i = 0
    let k = 0
    let j = 0

	while ((i < n) && (j < m)) {
		if (a[i] == b[j]) { 
			r[k] = a[i];
			k++
            i++
            j++
		} 
        else {
			if (a[i] < b[j]) i++
            else j++
		}
	}

    return r;
}

function difference(a, b) {
    let r = []
    a.filter((value, index, arr) => arr.indexOf(value) === index)
    b.filter((value, index, arr) => arr.indexOf(value) === index)
    a.sort()
    b.sort()

	let n = a.length
    let m = b.length
    let i = 0
    let k = 0
    let j = 0

	while ((i < n) && (j < m)) {
		if (a[i] == b[j]) { 
			i++
            j++
		} 
        else {
			if (a[i] < b[j]) {
				r[k] = a[i]
				k++
				i++
			} 
            else j++
		}
	}

	while (i < n) {
		r[k] = a[i]
		k++
        i++
	}

    return r;
}

function symmetric_difference(a, b) {
    let r = []
    a.filter((value, index, arr) => arr.indexOf(value) === index)
    b.filter((value, index, arr) => arr.indexOf(value) === index)
    a.sort()
    b.sort()

    let n = a.length
    let m = b.length
    let i = 0
    let k = 0
    let j = 0

    while ((i < n) && (j < m)) { 
        if (a[i] < b[j]) { 
            r[k] = a[i]
            k++
            i++
        } 
        else if (a[i] > b[j]) {
            r[k] = b[j]
            k++
            j++
        } 
        else {
            i++
            j++
        }
    }
    
    while (i < n) { 
        r[k] = a[i];
        k++
        i++
    }

    while (j < m) {
        r[k] = b[j];
        k++
        j++;
    }

    return r;
}
