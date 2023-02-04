const dashboard = async () => {
      // If successfully logged out, redirect to the login page
      document.location.replace('/dashboard');
    } 
  document.querySelector('#dashboard').addEventListener('click', dashboard);