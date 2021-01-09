let clickMeText = document.querySelector("#clickMe")
let result = document.querySelector("#result")

clickMeText.onclick = function() {
result.textContent = "Help Me"
}