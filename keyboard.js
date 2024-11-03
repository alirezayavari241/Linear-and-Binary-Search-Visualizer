function generateKeyboard() {
    const text = document.getElementById("inputText").value.toLowerCase();
    const letterFreq = {};
    
    for (let char of text) {
        if (/[a-z]/.test(char)) {
            letterFreq[char] = (letterFreq[char] || 0) + 1;
        }
    }

    const sortedLetters = Object.entries(letterFreq).sort((a, b) => b[1] - a[1]);

    const buttons = [];
    let currentButton = [];
    
    for (let [letter] of sortedLetters) {
        currentButton.push(letter);
        
        if (currentButton.length === 3) { 
            buttons.push(currentButton);
            currentButton = [];
        }
    }
    if (currentButton.length) buttons.push(currentButton);
    
    const keyboardLayout = document.getElementById("keyboardLayout");
    if(text.length>0){
        keyboardLayout.innerHTML = ""; 
        buttons.forEach((button) => {
            console.log(text.length);
            const buttonElement = document.createElement("button");
            buttonElement.className = "bg-gray-500 rounded-lg p-1 text-white";
            buttonElement.textContent = button.join(", ");
            keyboardLayout.appendChild(buttonElement);
        });
    }
}
function Upleftbtn(){
    const keyboardLayout = document.getElementById("keyboardLayout");
    const text = document.getElementById("inputText")
    text.value=''
    keyboardLayout.innerHTML =`
                <button class="bg-gray-500 rounded-lg p-1 text-white">a b c</button>
                <button class="bg-gray-500 rounded-lg p-1 text-white">d e f</button>
                <button class="bg-gray-500 rounded-lg p-1 text-white">g h i</button>
                <button class="bg-gray-500 rounded-lg p-1 text-white">j k l</button>
                <button class="bg-gray-500 rounded-lg p-1 text-white">m n o</button>
                <button class="bg-gray-500 rounded-lg p-1 text-white">p q r</button>
                <button class="bg-gray-500 rounded-lg p-1 text-white">t s u</button>
                <button class="bg-gray-500 rounded-lg p-1 text-white">v w x</button>
                <button class="bg-gray-500 rounded-lg p-1 text-white">y z</button>
                <button class="bg-gray-500 rounded-lg p-1 text-white">*</button>
                <button class="bg-gray-500 rounded-lg p-1 text-white">-</button>
                <button class="bg-gray-500 rounded-lg p-1 text-white">#</button>   
        ` 
}
window.onload = function() {
        const text = document.getElementById("inputText")
    text.value=''
};