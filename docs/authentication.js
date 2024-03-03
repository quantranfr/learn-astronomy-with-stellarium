// authentication.js

// Function to initialize Netlify Identity
function initializeNetlifyIdentity() {
    if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", user => {
            if (!user) {
                // If user is not logged in, display the login modal
                window.netlifyIdentity.open();
            }
        });
        // Trigger Netlify Identity initialization
        window.netlifyIdentity.init();
    }
}

// Function to execute on DOMContentLoaded event
function onDOMContentLoaded() {
    // Include Netlify Identity widget script
    var script = document.createElement("script");
    script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
    script.onload = function() {
        // Initialize Netlify Identity after the script has loaded
        initializeNetlifyIdentity();
    };
    document.head.appendChild(script);
    
    // Add the Netlify Identity menu div
    var identityMenuDiv = document.createElement("div");
    identityMenuDiv.setAttribute("data-netlify-identity-menu", "");
    document.body.appendChild(identityMenuDiv);
}

// Event listener for DOMContentLoaded event
document.addEventListener("DOMContentLoaded", onDOMContentLoaded);
