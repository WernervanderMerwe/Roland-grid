"use strict";

let row = [];
let rando;
const randomNumber = () => Math.trunc(Math.random() * 9 + 1);

const row1El = document.getElementById("row-1");
const row2El = document.getElementById("row-2");
const row3El = document.getElementById("row-3");
const buttonEl = document.querySelector(".btn");

let row1;
let row2;
let row3;

// debugger;

const isEven = () => {
  row = [];
  rando = randomNumber();

  row.push(rando);
  console.log(row);
  while (row.length < 9) {
    rando = randomNumber();
    if (!row.includes(rando) && row.length === 8 && rando === row[5] + 1) {
      console.log(`${row[0]} ${row[1]} ${row[2]}
${row[3]} ${row[4]} ${row[5]}
${row[6]} ${row[7]} ${rando} (9) is an increment of (8)`);

      row = [];
    } else if (!row.includes(rando) && rando !== row[row.length - 3] + 1) {
      row.push(rando);
      console.log(row, rando);
    } else if (!row.includes(rando) && rando === row[row.length - 3] + 1) {
      console.log(row, rando, `Increment detected`);
    } else {
      console.log(`... amount of retries`);
      // console.log(row, rando, `is the same value as a row value`);
    }
  }
  row1 = `${row[0]} ${row[1]} ${row[2]}`;
  row2 = `${row[3]} ${row[4]} ${row[5]}`;
  row3 = `${row[6]} ${row[7]} ${row[8]}`;
  row1El.textContent = row1;
  row2El.textContent = row2;
  row3El.textContent = row3;
  console.log(row1);
  console.log(row2);
  console.log(row3);
};

isEven(row);

buttonEl.addEventListener("click", isEven);
