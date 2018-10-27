const numberOfStudents = 31;

let btnSort = document.getElementById('btn-sort');

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
    return sortRandomNumber(1, numberOfStudents);
}

function sortRandomNumber(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}

// function buildSorted(sorted) {
//     let divSorted = document.getElementById('sorted');
//     divSorted.innerHTML = "<img alt='Sorted' src='students/" + sorted + ".jpg' />";
// }

function buildSorted(sorted) {
    let divSorted = document.getElementById('sorted');
    for (let i = 1; i <= numberOfStudents; i++) {
        if (i === sorted) { break; }
        setTimeout(function() {
            divSorted.innerHTML = "<img alt='Sorted' src='students/" + i + ".jpg' />"}
            , i*30)
    }   
}



