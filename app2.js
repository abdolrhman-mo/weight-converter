const input = document.getElementById("lbsInput");
const gmOutput = document.getElementById("gramsOutput");
const kgOutput = document.getElementById("kgOutput");

input.addEventListener("keyup", () => {
  let inputValue = input.value;
  kgOutput.textContent = inputValue * 2.20462;
});
