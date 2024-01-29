function submitForm() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;

  // Add more variables for other form fields

  const registrationDetails = {
    username,
    email,
    // Add more fields as needed
  };

  // Send data to server for DynamoDB interaction
  sendDataToServer(registrationDetails);
}

function sendDataToServer(data) {
  fetch('http://3.110.120.51:3000/save-registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(result => {
    console.log('Registration details saved successfully:', result);
  })
  .catch(error => {
    console.error('Error saving registration details:', error);
  });
}

