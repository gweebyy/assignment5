document.addEventListener("DOMContentLoaded", function() {
    const textInput = document.getElementById("textInput");
    const biggerButton = document.getElementById("biggerButton");
    const fancyRadio = document.getElementById("fancyRadio");
    const boringRadio = document.getElementById("boringRadio");
    const mooButton = document.getElementById("mooButton");

    function showAlert() {
      alert("Hello, world!");
    }

    function increaseTextSize() {
        textInput.style.fontSize = "24pt";
    }
  
    function applyStyles() {
        if (fancyRadio.checked) {
          textInput.style.fontWeight = "bold";
          textInput.style.color = "blue";
          textInput.style.textDecoration = "underline";
          alert("fancy");
        } 
        else if (boringRadio.checked) {
          textInput.style.fontWeight = "normal";
          textInput.style.color = "black";
          textInput.style.textDecoration = "none";
          alert("boring");
        }
    }

    function applyMoo() {
        text = textInput.value;
        textInput.value = textInput.value.toUpperCase();

        sentences = text.split(".");
        
        sentences = sentences.map((sentence) => {
          words = sentence.split(" ");

          if (words.length > 1) {
            lastWordIndex = words.length - 1;
            words[lastWordIndex] += "-Moo";
          }
          else {
            words[0] += "-Moo";
          }

          return words.join(" ");
        });

        textInput.value = sentences.join(".");
      }

    biggerButton.addEventListener("click", increaseTextSize);
    fancyRadio.addEventListener("change", applyStyles);
    boringRadio.addEventListener("change", applyStyles);
    mooButton.addEventListener("click", applyMoo)
  });