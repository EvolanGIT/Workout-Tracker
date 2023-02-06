const dashboard = async () => {
      // If successfully logged out, redirect to the login page
      document.location.replace('/');
    } 
  document.querySelector('#dashboard').addEventListener('click', dashboard);