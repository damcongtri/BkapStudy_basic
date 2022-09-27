function changePrice() {
    console.log(document.getElementsByClassName('price-range')[0].value);
}
function rangeSlideMin(value) {
    document.getElementById('rangeValueMin').innerHTML = value;
}
function rangeSlideDate(value) {
    document.getElementById('rangeValueDate').innerHTML = value;
}
function rangeSlideMax(value) {

    if (value == 1000) {
        document.getElementById('rangeValueMax').innerHTML = value + '+';
    } else {
        document.getElementById('rangeValueMax').innerHTML = value
    }
}