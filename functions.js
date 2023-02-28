const findLargest = (arr) => {

    if (!arr || arr.length === 0) {
        return -1
    }

    let largestIndex = 0

    for (let i = 1; i <= arr.length; i++) {
        if(arr[i] > arr[largestIndex]) {
            largestIndex = i
        }
    }

    return largestIndex
}
const arrayLengthType = (arr) => {
    if (!arr || arr.length === 0) {
        return "empty";
    }
    if (arr.length % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

module.exports = {findLargest, arrayLengthType}