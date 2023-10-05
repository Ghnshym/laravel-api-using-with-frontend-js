document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    const message = document.getElementById("message");

    const registerURL = "http://127.0.0.1:8000/api/register";

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
                message.innerHTML = "Registration successful! Redirecting to login page...";
                
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
