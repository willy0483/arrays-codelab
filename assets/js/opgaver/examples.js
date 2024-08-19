let myExtras = [];
const myExtrasInput = document.getElementById("extraUdstyr");
const myExtrasListElement = document.getElementById("extraList");

myExtrasInput.addEventListener("change", addExtra);

function addExtra() {
  const selectedExtra = myExtrasInput.value;

  if (selectedExtra) {
    myExtras.push(selectedExtra);
    updateExtras();
  }
}

function updateExtras() {
  myExtrasListElement.innerHTML = myExtras
    .map(
      (extra, index) =>
        `<li>
    ${extra} 
    <button onclick="removeExtra(${index})">Remove</button>
  </li>`
    )
    .join("");
}

function removeExtra(index) {
  myExtras.splice(index, 1);
  updateExtras();
}
