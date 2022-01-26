const rooms = document.querySelectorAll("button.switch");
const inv = document.querySelector("div#inv");
const content = document.querySelector("div#in");

// room content
let r_t = [
  ["bed"],
  ["toilet", "sink", "bathtub"],
  ["TV", "armchair", "front door"],
  ["table", "note", "window"],
  ["rummage"]
];
var look = "";
var curr_r = 0;


for (let i in rooms) {
  rooms[i].addEventListener("click", function() {
    curr_r = i;
    look = "";
    for (let j of r_t[curr_r]) {
      look = look + `<button id="${j}">${j}</button>`;
    }
  })
}
