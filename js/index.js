const numberOfStudents = 31;

let btnSort = document.getElementById('btn-sort');
var audio = new Audio("peao.mp3")

btnSort.addEventListener('click', function () {
    let sorted = sort();
    buildSorted(sorted);
    audio.play();
});


function sort() {
    return sortRandomNumber(1, numberOfStudents);
}

function sortRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function buildSorted(sorted) {
    let divSorted = document.getElementById('sorted');
    for (let i = 1; i <= numberOfStudents; i++) {
        if (i === sorted) {
            console.log(audio.paused, 'audio')
            audio.pause();
            break;
        }
        setTimeout(function () {
            divSorted.innerHTML = "<img class='circle' alt='Sorted' src='students/" + i + ".jpg' />"
        }
            , i * 100)
    }
}



