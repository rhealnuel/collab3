const out1 = document.getElementById("out1");
const out1p = document.getElementById("out1p");
const out2 = document.getElementById("out2");
const out2p = document.getElementById("out2p");

var storedValue = localStorage.getItem("a");

out1.textContent = storedValue;
out1p.textContent = storedValue;
out2.textContent = storedValue;
out2p.textContent = storedValue;



 // Function to copy text to the clipboard
        function copyTextToClipboard() {
            // Get the text element
            var textElement = document.getElementById("targetP");

            // Create a temporary input element
            var tempInput = document.createElement("input");
            tempInput.value = textElement.innerText;

            // Append the input element to the document
            document.body.appendChild(tempInput);

            // Select the text in the input element
            tempInput.select();

            // Copy the selected text to the clipboard
            document.execCommand("copy");

            // Remove the temporary input element
            document.body.removeChild(tempInput);

            alert("Text copied to clipboard");
        }

        // Add a click event listener to the copy button
        var copyButton = document.getElementById("copybutton");
        copyButton.addEventListener("click", copyTextToClipboard);


        // Function to copy text to the clipboard
        function copyTextToClipboard() {
            // Get the text element
            var textElement = document.getElementById("textcopy");

            // Create a temporary input element
            var tempInput = document.createElement("input");
            tempInput.value = textElement.innerText;

            // Append the input element to the document
            document.body.appendChild(tempInput);

            // Select the text in the input element
            tempInput.select();

            // Copy the selected text to the clipboard
            document.execCommand("copy");

            // Remove the temporary input element
            document.body.removeChild(tempInput);

            alert("Text copied to clipboard");
        }

        // Add a click event listener to the copy button
        var copyButton = document.getElementById("copyicon");
        copyButton.addEventListener("click", copyTextToClipboard);
