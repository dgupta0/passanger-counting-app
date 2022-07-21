let countEl = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("prev-el")

function increment() {
    count += 1;
    countEl.innerText = count;
    console.log(count)
}

function save() {
    saveEl.innerText += " - " + count;
    count = 0;
    countEl.innerText = count;
}