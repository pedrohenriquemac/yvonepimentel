// Get the input element and submit button
var nameInput = document.getElementById("nameInput");
var submitButton = document.getElementById("submitButton");

// Function to display welcome message
function exibirMensagemBoasVindas() {
    var name = nameInput.value.trim();
    if (name !== "") {
        alert("Seja bem-vindo, " + name + "!");
    }
}

// Event listener for button click
submitButton.addEventListener("click", exibirMensagemBoasVindas);

// Event listener for Enter key press in input field
nameInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        exibirMensagemBoasVindas();
    }
});
