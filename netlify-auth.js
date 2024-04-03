<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
<script>
  var myTimer;
  
  function checkLoginStatus() {
    if (!window.netlifyIdentity.currentUser()) {
      // If user is not logged in, show the modal
      window.location.href = 'login.html';
    } else {
      injectLogoutButton();
      clearTimeout(myTimer);
    }
  }
  
  myTimer = setTimeout(checkLoginStatus, 5000);
    
  // Function to create logout button and inject it under .book-extra
  function injectLogoutButton() {
    var bookExtra = document.querySelector('#main-nav nav .book-extra');
    if (bookExtra) {
      var logoutButton = document.createElement('div');
      logoutButton.classList.add('book-download');
      logoutButton.innerHTML = '<button id="logoutButton" class="btn btn-sm btn-outline-danger">Logout</button>';
      bookExtra.appendChild(logoutButton);

      document.getElementById('logoutButton').addEventListener('click', function () {
        if (window.netlifyIdentity) {
          window.netlifyIdentity.logout();
        } else {
          console.error('Netlify Identity not initialized yet. Check that it is loaded in your HTML body.');
        }
      });
    }
    
    // Remove unnecessary elements
    var bookSource = document.getElementById('book-source');
    if (bookSource) {
      bookSource.remove();
    }
    var bookRepo = document.getElementById('book-repo');
    if (bookRepo) {
      bookRepo.remove();
    }
    var bookEdit = document.getElementById('book-edit');
    if (bookEdit) {
      bookEdit.remove();
    }
  }
</script>
