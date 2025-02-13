const facts = [
    "I love nature, especially sunsets and beaches.",
    "As a selenophile, I admire the beauty of the moon.",
    "I seek tranquility and reflection in sunset views.",
    "I have an adventurous spirit, exploring diverse landscapes.",
    "I have a fondness for cats, enjoying their companionship and playful nature."
];

const factElement = document.getElementById('fact');
const newFactBtn = document.getElementById('newFactBtn');

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factElement.textContent = facts[randomIndex];
}

// Show a random fact when the page loads
showRandomFact();

// Add event listener to the button
newFactBtn.addEventListener('click', showRandomFact);
