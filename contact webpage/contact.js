document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // stops page refresh

    alert("✅ Message sent successfully!");

    // Clear form fields
    document.getElementById("contactForm").reset();
});

