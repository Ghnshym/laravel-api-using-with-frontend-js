document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    const message = document.getElementById("message");

    const registerURL = "http://127.0.0.1:8000/api/register";

    // Registration form submission
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = document.getElementById("registerName").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;

        try {
            const response = await fetch(registerURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Handle successful registration (e.g., show a success message)
                message.innerHTML = "Registration successful! Redirecting to login page...";
                
                // Redirect to login.html after a brief delay (e.g., 2 seconds)
                setTimeout(() => {
                    window.location.href = "login.html";
                }, 2000);
            } else {
                message.innerHTML = data.message || "Registration failed.";
            }
        } catch (error) {
            console.error("Registration error:", error);
        }
    });
});
