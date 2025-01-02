document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page refresh

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Thank you for your message, " + name + "! I'll get back to you soon.");
        document.getElementById('contact-form').reset(); // Reset the form
    } else {
        alert("Please fill out all fields.");
    }
});
