/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let who = [
    "My lovely komodo dragon",
    "My lovely crocodile",
    "My lovely bull shark",
    "My lovely tarantula",
    "My lovely cobra",
    "My lovely blue ring octopus"
  ];
  let action = ["eat", "hide", "smash", "break", "be on", "swallow"];
  let what = [
    "my laptop",
    "my phone",
    "my wedding ring",
    "my notebook",
    "my keys",
    "my id"
  ];
  let when = [
    "just right now",
    "when I was cooking",
    "while I was dressing up",
    "when I was in the throne",
    "when it was almost finished",
    "late at night"
  ];
  function generateExcuses() {
    let whoIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);
    return `${who[whoIndex]} decided to ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
  }
  function mostrarTexto() {
    let texto = generateExcuses();
    let elemento = document.getElementById("excusa");
    elemento.innerHTML = texto; 
  }
  mostrarTexto(); 
};
