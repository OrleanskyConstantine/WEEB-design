"use strict"

const x = document.querySelectorAll(".paste");
const y = document.querySelectorAll(".proc");

x.forEach(item => {
    for (let i = 0; i < 12; i++){
        let number = Math.floor(Math.random() * (45000 - 10000) + 10000);
        item.innerHTML += `<td>${number}</td>`;
    }
});

y.forEach(item => {
    for (let i = 0; i < 12; i++){
        let number = Math.floor(Math.random() * (15 - 6) + 6);
        item.innerHTML += `<td>${number}%</td>`;
    }
})


