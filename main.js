"use strict";
const container = document.querySelector('.distribution-map');
const heading = document.createElement("h2");
const btn = document.createElement("button");
const div = document.createElement("div");
const p = document.createElement("p");
const fragment = document.createDocumentFragment();

// Add locations here as needed.
const places = [
  {
    top: "15%",
    left: "35%",
    heading: "Chicago, IL",
    text: "Lorem ipsum"
  },
  {
    top: "10%",
    left: "35%",
    heading: "San Diego",
    text: "Lorem ipsum"
  }
];


function addLocations(){
  for (let i = 0; i < places.length; i++) {
    let current = places[i];
    let btnClone = btn.cloneNode();
    let headingClone = heading.cloneNode();
    let pClone = p.cloneNode();
    let divClone = div.cloneNode();
    let clone = div.cloneNode();
    btnClone.classList.add("map-point");
    divClone.classList.add("content");
    clone.classList.add("centered-y");
    btnClone.style.top = current.top;
    btnClone.style.left = current.left;
    headingClone.appendChild(document.createTextNode(current.heading));
    pClone.appendChild(document.createTextNode(current.text));
    clone.appendChild(headingClone);
    clone.appendChild(pClone);
    divClone.appendChild(clone);
    btnClone.appendChild(divClone);
    fragment.appendChild(btnClone);
  }
  container.appendChild(fragment);
}

window.addEventListener('load', addLocations, false )
