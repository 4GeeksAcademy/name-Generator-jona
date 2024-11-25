/* eslint-disable 
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
*/
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extenciones = [".com", ".net", ".us", ".io"];
let total = "";

window.onload = function generador() {
  //write your code here
  total = "";
  for (let j = 0; j < pronoun.length; j++) {
    for (let x = 0; x < adj.length; x++) {
      for (let y = 0; y < noun.length; y++) {
        for (let z = 0; z < extenciones.length; z++) {
          total += `<p>${pronoun[j]}${adj[x]}${noun[y]}${extenciones[z]}</p>`;
          console.log(`${pronoun[j]}${adj[x]}${noun[y]}${extenciones[z]}`);
        }
      }
    }
  }
  document.getElementById("nombres").innerHTML = total;
};
