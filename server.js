const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');

const app = express();
app.use(bodyParser.json());

// Set the AWS region
AWS.config.update({ region: 'ap-south -1' }); // Replace 'your-region' with your AWS region

// Create a DynamoDB DocumentClient
const docClient = new AWS.DynamoDB.DocumentClient();

// Define your DynamoDB table name
const tableName = 'registration-table'; // Replace 'YourTableName' with your DynamoDB table name

app.post('/save-registration', async (req, res) => {
  const registrationDetails = req.body;

  const params = {
    TableName: tableName,
    Item: registrationDetails,
  };

  try {
    await docClient.put(params).promise();
    res.json({ success: true });
  } catch (error) {
    console.error('Error saving registration details:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

