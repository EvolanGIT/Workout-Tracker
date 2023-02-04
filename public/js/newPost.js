const newPost = async () => {
      // If successfully logged out, redirect to the login page
      document.location.replace('/newPost');
    } 
  document.querySelector('#newPost').addEventListener('click', newPost);