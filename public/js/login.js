const loginFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  const signUpFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();

    // Gather the data from the form elements on the page
    const user_name = document.querySelector("#Username").value.trim();
    const password = document.querySelector("#Password").value.trim();
    const email = document.querySelector("#E-mail").value.trim();
    const current_weight = document.querySelector("#Starting-Weight").value.trim();
    const goal_weight = document.querySelector("#Goal-Weight").value.trim();
    
    if (email && password) {
      // Send the e-mail and password to the server
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ email, password, user_name, current_weight, goal_weight}),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        console.log("sign up successful")
        document.location.replace("/dashboard");
      } else {
        alert("Failed to log in");
      }
    }
  };
  document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
  document.querySelector('#sign-up-form').addEventListener('submit', signUpFormHandler);