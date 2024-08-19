function fibs(x) {

    if (x === 0) return [];

    let output = [0];

    for (let i = 1; i < x; i++) {
        if (i === 1) {
            output.push(1)
        } else {
            output.push(output[i-2] + output[i-1]);
        }
    }
    return output
}

function fibsRec(x) {
    // Handle base
    if (x === 0) return [];
    if (x === 1) return [0];
    if (x === 2) return [0, 1];

    let sequence = fibsRec(x-1);
    let next = sequence[x - 2] + sequence[x - 3];

    return [...sequence, next];
}