const rooms = document.querySelectorAll("button.switch");
const inv = document.querySelector("div#inv");
const content = document.querySelector("div#in");

// room content
let r_t = [
  {
    things: ["bed"],
    title: ["Not the time to sleep."]
  },
  {
    things: ["toilet", "sink", "bathtub"],
    title: ["Ugh, disgusting. It has some... stool in it.", "A normal sink.", "There's a watermelon inside? How?"]
  },
  {
    things: ["TV", "armchair", "front door"],
    title: ["You can throw the TV if you want.", "Nice, comfortable. But you should escape from the house, not watch the telly.", "You get out from here."]
  },
  {
    things: ["table", "note", "window"],
    title: ["If you smash it hard enough, it breaks! Easy.", "A note? Since when?", "It's night outside, but it's still not an excuse to sleep."]
  },
  {
    things: ["rummage"],
    title: ["There's a lot of stuff here."]
  }
];
var look = "";
var curr_r = 0;


for (let i in rooms) {
  rooms[i].addEventListener("click", function() {
    curr_r = i;
    look = "";
    for (let j in r_t[curr_r].things) {
      look = look + `<button id="${r_t[curr_r].things[j]}" title="${r_t[curr_r].title[j]}">${r_t[curr_r].things[j]}</button>`;
    }
    content.innerHTML = look;
  })
}
