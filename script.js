// Notes (white keys)
const notes = [
"a2b", "a3b", "a3t", "a4t", "a5t", "b2b", "b3b", "b3t", 
"b4t", "b5t", "c2b", "c3b", "c4t", "c5t", "c6t", "d2b", 
"d3b", "d4t", "d5t", "e2b", "e3b", "e4t", "e5t", "f2b", 
"f3b", "f4t", "f5t", "g2b", "g3b", "g4t", "g5t" 
];

const labels = {
    "a2b": "A",
    "a3b": "A",
    "a3t": "A",
    "a4t": "A",
    "a5t": "A",
    "b2b": "B",
    "b3b": "B",
    "b3t": "B",
    "b4t": "B",
    "b5t": "B",
    "c2b": "C", 
    "c3b": "C",
    "c4t": "C",
    "c5t": "C",
    "c6t": "C",
    "d2b": "D", 
    "d3b": "D",
    "d4t": "D",
    "d5t": "D",
    "e2b": "E", 
    "e3b": "E",
    "e4t": "E",
    "e5t": "E",
    "f2b": "F",
    "f3b": "F",
    "f4t": "F",
    "f5t": "F",
    "g2b": "G", 
    "g3b": "G",
    "g4t": "G",
    "g5t": "G"
};

const buttons = ["C", "D", "E", "F", "G", "A", "B"];

// Assume your images are named like C.png, D.png, etc., in "img/"
const imgPath = "notes/";

// Selectors
const noteImage = document.getElementById("note-image");
const buttonsDiv = document.getElementById("buttons");
const feedback = document.getElementById("feedback");

let currentNote = "";

// Create buttons
buttons.forEach(note => {
  const btn = document.createElement("button");
  btn.textContent = labels[note] || note; // use label if exists
  btn.addEventListener("click", () => checkAnswer(note));
  buttonsDiv.appendChild(btn);
});

// Pick a random note and display
function loadNewNote() {
  currentNote = notes[Math.floor(Math.random() * notes.length)];
  noteImage.src = `${imgPath}${currentNote}.png`;
  feedback.textContent = "";
}

// Check user guess
function checkAnswer(choice) {
  if (choice === labels[currentNote]) {
    feedback.textContent = "Correct!";
    setTimeout(loadNewNote, 100);
  } else {
    feedback.textContent = "Try again!";
  }
}


// Start game
loadNewNote();
