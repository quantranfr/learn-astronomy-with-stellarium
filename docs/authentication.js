// authentication.js

// Function to initialize Netlify Identity
function initializeNetlifyIdentity() {
    if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", user => {
            if (!user) {
                // If user is not logged in, redirect to login page
                window.location.href = "/login.html";
            }
        });
        // Trigger Netlify Identity initialization
        window.netlifyIdentity.init();
    }
}

// Function to execute on DOMContentLoaded event
function onDOMContentLoaded() {
    // Initialize Netlify Identity
    initializeNetlifyIdentity();
}

// Event listener for DOMContentLoaded event
document.addEventListener("DOMContentLoaded", onDOMContentLoaded);
