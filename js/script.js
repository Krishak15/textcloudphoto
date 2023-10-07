const customText = document.getElementById("custom-text");
const customInput = document.getElementById("customInput");
const imageInput = document.getElementById("imageInput");
const fontSizeInput = document.getElementById("fontSize");
const fontWeightInput = document.getElementById("fontWeight");
const containerSizeInput = document.getElementById("containerSize");
const downloadLink = document.getElementById("downloadLink");

function updateText() {
  const newText = customInput.value;
  customText.textContent = newText;
}

function changeBackground() {
  const file = imageInput.files[0];
  if (file) {
    const imageUrl = URL.createObjectURL(file);
    customText.style.backgroundImage = `url("${imageUrl}")`;
  }
}

function adjustContainerSize() {
  const selectedSize = containerSizeInput.value.split("x");
  const width = selectedSize[0];
  const height = selectedSize[1];
  customText.style.width = width + "px";
  customText.style.height = height + "px";
  customText.style.paddingTop = 0; // Reset padding
}

fontSizeInput.addEventListener("input", () => {
  customText.style.fontSize = fontSizeInput.value + "px";
});

fontWeightInput.addEventListener("input", () => {
  customText.style.fontWeight = fontWeightInput.value;
});

downloadLink.addEventListener("click", () => {
  const container = document.querySelector(".text-container");
  html2canvas(container).then(function(canvas) {
    downloadLink.href = canvas.toDataURL("image/png");
  });
});
