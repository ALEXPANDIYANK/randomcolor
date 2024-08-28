

document.addEventListener("DOMContentLoaded", () => {
  const generateColorButton = document.getElementById("generateColorButton");
  const colorDisplay = document.getElementById("colorDisplay");

  generateColorButton.addEventListener("click", () => {
    const randomColor = generateRandomColor();
    colorDisplay.textContent = "Color:" + randomColor;
    document.body.style.backgroundColor = randomColor;
  });

  function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});