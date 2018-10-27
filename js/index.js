const numberOfStudents = 31;

let btnSort = document.getElementById('btn-sort');

let sorts = [];

btnSort.addEventListener('click', function () {
    let sorted = sort();
    buildSorted(sorted);
    playAudio()
});

function playAudio(){
    var audio = document.getElementById("audio");
    audio.play();
}

function sort() {
    let item = sortRandomNumber(1, numberOfStudents);
    while (sorts.includes(item)) {
        item = sortRandomNumber(1, numberOfStudents);
        if (!sorts.includes(item)) {
            sorts.push(item);
            break
        }
    }
    return item;
}

function sortRandomNumber(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}

function buildSorted(sorted) {
    let divSorted = document.getElementById('sorted');
    for (let i = 1; i <= numberOfStudents; i++) {
        if (i === sorted) { break; }
        setTimeout(function() {
            divSorted.innerHTML = "<img alt='Sorted' src='students/" + i + ".jpg' />"}
            , i*30)
    }   
}


