document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const message = document.getElementById("message");

    // Add your login functionality here
    const loginURL = "http://127.0.0.1:8000/api/login";

    // Login form submission
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        try {
            const response = await fetch(loginURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            console.log(data.data.token)

            if (response.ok) {
                // Handle successful login
                message.innerHTML = "Login successful! Redirecting to welcome page...";                
                // Redirect to welcome.html after a brief delay (e.g., 2 seconds)
                setTimeout(() => {
                    window.location.href = "welcome.html";
                }, 2000);
            } else {
                message.innerHTML = data.message || "Login failed.";
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    });
});
