const numberOfStudents = 31;

let btnSort = document.getElementById('btn-sort');

btnSort.addEventListener('click', function () {
    let sorted = sort();
    buildSorted(sorted);
});

function sort() {
    return sortRandomNumber(1, numberOfStudents);
}

function sortRandomNumber(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}

function buildSorted(sorted) {
    let divSorted = document.getElementsByName('sorted')[0];
    divSorted.innerHTML = "<img alt='Sorted' src='students/" + sorted + ".jpg' />";
}