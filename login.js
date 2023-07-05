$(document).ready(function() {
    // Login form submission
    $('#login-form').submit(function(event) {
      event.preventDefault(); // Prevent form from submitting normally
      var username = $('#login-username').val();
      var password = $('#login-password').val();
  
      // Make API request for login
      $.ajax({
        url: 'YOUR_LOGIN_API_URL',
        type: 'POST',
        data: {
          username: username,
          password: password
        },
        success: function(response) {
          // Handle login success
          localStorage.setItem('printResponse', JSON.stringify(response));
          window.location.href = 'response.html';
          
          // Redirect or perform any other action
        },
        error: function(error) {
          // Handle login error
          //console.log('Login failed!');
          // Display error message to the user
        }
      });
    });
  
    // Sign up form submission
    $('#signup-form').submit(function(event) {
      event.preventDefault(); // Prevent form from submitting normally
      var name = $('#signUp-name').val();
      var email = $('#signUp-email').val();
      var password = $('#signUp-password').val();
      var userName = $('#signUp-userName').val();
      // Make API request for sign up
      $.ajax({
        url: 'YOUR_SIGNUP_API_URL',
        type: 'POST',
        data: {
          name: name,
          email: email,
          password: password,
          userName: userName
        },
        success: function(response) {
          // Handle sign up success
          localStorage.setItem('printResponse', JSON.stringify(response));
          window.location.href = 'response.html';
          //console.log('User registered successfully');
          // Redirect or perform any other action
        },
        error: function(error) {
          // Handle sign up error
          //console.log('Sign up failed!');
          // Display error message to the user
        }
      });
    });

    // Forgot Password form submission
    $('#forgotPassword-form').submit(function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        var userName = $('#forgotPass-username').val();
        // Make API request for sign up
        $.ajax({
          url: 'YOUR_SIGNUP_API_URL',
          type: 'POST',
          data: {
            userName: userName
          },
          success: function(response) {
            // Handle sign up success
            localStorage.setItem('printResponse', JSON.stringify(response));
            window.location.href = 'response.html';

            // Redirect or perform any other action
          },
          error: function(error) {
            // Handle sign up error

            // Display error message to the user
          }
        });
      });

      $(document).ready(function() {
        // Retrieve the response from local storage response-container-unsuccess
        var response = JSON.parse(localStorage.getItem('printResponse'));
      
        if (response) {
          // Display the response data on the page
          var responseContainer = $('#response-container');
          responseContainer.append(response);
        } else {
          // Handle case where response is not available
          //console.log('Response data not found!');
        }
      
        // Clear the stored response from local storage
        localStorage.removeItem('printResponse');
      });
      
  });
  