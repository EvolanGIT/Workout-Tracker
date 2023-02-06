const postFormHandler = async (event) => {
  
  event.preventDefault();

  console.log('this button works')
    // Gather the data from the form elements on the page
    const userName= document.querySelector('#profile')
    const post_title = document.querySelector('#post-title').value.trim();
    //placeholder for updated wt variable
    const post_text = document.querySelector('#post-text').value.trim();


    
    if (post_title && post_text) {
      const response = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({ post_title, post_text}),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        console.log("post successful")
        document.location.replace("/dashboard");
      } else {
        alert("failed to post message");
      }
    }
  };
 //modal
//  $('#myModal').on('shown.bs.modal', function () {
//   $('#myInput').trigger('focus')
// })
  document.querySelector("#postForm")
  .addEventListener("submit", postFormHandler)
