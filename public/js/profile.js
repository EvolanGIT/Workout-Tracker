const profile = async () => {
    // If successfully logged out, redirect to the login page
    document.location.replace('/profile');
  } 
document.querySelector('#profile').addEventListener('click', profile);