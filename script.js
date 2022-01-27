/**
My first GitHub HTML-CSS-JS project for so long.
**/

const rooms = document.querySelectorAll("button.switch");
const inv = document.querySelector("div#inv");
const content = document.querySelector("div#in");
inv.innerHTML = [];

// room content
let r_t = [
  {
    things: ["bed"],
    title: ["Not the time to sleep."],
    does: []
  },
  {
    things: ["toilet", "sink", "bathtub"],
    title: ["Ugh, disgusting. It has some... stool in it.", "A normal sink.", "There's a watermelon inside? How?"],
    does: []
  },
  {
    things: ["TV", "armchair", "front door"],
    title: ["You can throw the TV if you want.", "Nice, comfortable. But you should escape from the house, not watch the telly.", "You get out from here."],
    does: []
  },
  {
    things: ["table", "note", "window"],
    title: ["If you smash it hard enough, it breaks! Easy.", "A note? Since when?", "It's night outside, but it's still not an excuse to sleep."],
    does: []
  },
  {
    things: ["rummage"],
    title: ["There's a lot of stuff here."],
    does: []
  }
];
// note: front door has one lock, and is very strong. You will need two things. Also you can throw the poop from the toilet at the window. When you do that, it just goes *splat* and falls to the floor. Wash your hands after that! XD
var items = ["key", "sledgehammer", "axe", "stool", "watermelon"];
var did_the_deed = false;

var look = "";
var curr_r = 0;

// room responses
r_t[0].does[0] = function() {
  alert("You can't sleep now, you should escape!");
};
r_t[1].does[0] = function() {
  alert("You got some stool from the toilet! Disgusting.");
  inv.innerHTML.push(items[3]);
};
r_t[1].does[1] = function() {
  if (did_the_deed == false) {
    alert("No need to wash your hands and brush your teeth.")
  } else {
    alert("You did the deed! Deed: Throw stool at the window, then wash your hands and leave the water running.")
  }
};
r_t[1].does[2] = function() {
  alert("You got a watermelon! Wonder what's it for...");
  inv.innerHTML.push(items[4]);
};
r_t[2].does[0] = function() {
  alert("You threw the TV on the floor, and an axe and a key was inside! You took it.")
  inv.innerHTML.push(items[2]);
  inv.innerHTML.push(items[0]);
};
r_t[2].does[1] = function() {
  alert("So soft, so comfortable. It feels like you're in heaven, floating on a cloud.");
};
r_t[2].does[2] = function() {
  if (inv.indexOf("key") > -1 && inv.indexOf("axe") > -1 && inv.indexOf("sledgehammer")) {
    alert("You escaped!");
    close();
  }
}

for (let i in rooms) {
  // chrome console, you're the worst. rooms[i].addEventListener IS A FUNCTION, and yet you say it is not. *facepalm*.
  rooms[i].addEventListener("click", function() {
    curr_r = i;
    look = "";
    for (let j in r_t[curr_r].things) {
      console.log(j);
    }
    content.innerHTML = look;
  })
}
