function reverseString() {
    const input = document.getElementById("inputText").value;
    const resultText = document.getElementById("resultText");

    if (input.trim() === "") {
        resultText.textContent = "Please enter some text.";
        return;
    }

    fetch("/reverse", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: input
        })
    })
    .then(response => response.json())
    .then(data => {
        resultText.textContent = data.reversed;
        resultText.classList.remove("result-placeholder");
    })
    .catch(error => {
        resultText.textContent = "Something went wrong.";
        console.error(error);
    });
}

function copyToClipboard() {
    const text = document.getElementById("resultText").textContent;

    if (!text || text === "Your reversed text will appear here") {
        return;
    }

    navigator.clipboard.writeText(text);
}
