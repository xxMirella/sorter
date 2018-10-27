const numberOfStudents = 31;

let btnSort = document.getElementById('btn-sort');
let audio = new Audio("peao.mp3");

let sorts = [];

btnSort.addEventListener('click', function () {
    let sorted = sort();
    buildSorted(sorted);
    audio.play();
});


function sort() {
    let item = sortRandomNumber(1, numberOfStudents);
    if (!sorts.includes(item)) {
        sorts.push(item);
    } else {
        sort();
    }
    console.log(sorts);
    return item;
}

function sortRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function buildSorted(sorted) {
    let divSorted = document.getElementById('sorted');
    for (let i = 1; i <= numberOfStudents; i++) {
        if (i === sorted) {
            console.log(audio.paused, 'audio');
            audio.pause();
            break;
        }
        setTimeout(function () {
            divSorted.innerHTML = "<img class='circle' alt='Sorted' src='students/" + i + ".jpg' />"
        }
            , i * 100)
    }
}


