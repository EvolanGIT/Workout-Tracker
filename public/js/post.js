const postFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const userName= document.querySelector('#profile')
    const post_title = document.querySelector('#post-title').value.trim();
    //placeholder for updated wt variable
    const post_text = document.querySelector('#post-text').value.trim();
  
    if (post_title && post_text) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ post_title, post_text}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to log in');
      }
    }
  };
 //modal
//  $('#myModal').on('shown.bs.modal', function () {
//   $('#myInput').trigger('focus')
// })
  document.querySelector("#post-form")
  .addEventListener("submit", postFormHandler)