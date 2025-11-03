/**
 * Google Apps Script: Form Submission to Webhook
 *
 * This script sends form submission data to goalmatic webhook endpoint.
 * It excludes file upload fields (Proof of Payment) from the google form payload.
 *
 * Form Fields:
 * - First Name
 * - Last Name
 * - Email Address
 * - WhatsApp Number
 * - What are your expectations from this course?
 * - How did you hear about this course?
 */

// Webhook endpoint URL
const WEBHOOK_URL = "<insert-goalmatic-webhook-url>";

/**
 * Main function triggered on form submission
 * @param {Object} e - Event object containing form response
 */
function onFormSubmit(e) {
  try {
    // Get the form response
    const itemResponses = e.response.getItemResponses();

    // Initialize payload object
    const payload = {};

    // Map form responses to payload fields
    itemResponses.forEach(function (itemResponse) {
      const question = itemResponse.getItem().getTitle();
      const answer = itemResponse.getResponse();

      // Map questions to appropriate JSON keys
      // Skip file upload fields
      switch (question) {
        case "First Name":
          payload.firstName = answer;
          break;
        case "Last Name":
          payload.lastName = answer;
          break;
        case "Email Address":
          payload.email = answer;
          break;
        case "WhatsApp Number":
          payload.whatsappNumber = answer;
          break;
        case "What are your expectations from this course?":
          payload.expectations = answer;
          break;
        case "How did you hear about this course?":
          payload.howDidYouHear = answer;
          break;
        case "Upload Proof of Payment":
          // Intentionally skip file upload field
          Logger.log("Skipping file upload field: " + question);
          break;
        default:
          // Log any unexpected fields
          Logger.log("Unmapped field: " + question + " = " + answer);
      }
    });

    // Add timestamp
    payload.timestamp = new Date().toISOString();
    payload.formName = "Senpai's PM Dojo Cohort 1";

    // Send data to webhook
    sendToWebhook(payload);
  } catch (error) {
    Logger.log("Error in onFormSubmit: " + error.toString());
    Logger.log("Stack trace: " + error.stack);
  }
}

/**
 * Sends the payload to the webhook endpoint
 * @param {Object} payload - The data to send
 */
function sendToWebhook(payload) {
  try {
    const options = {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(payload),
      muteHttpExceptions: true,
    };

    Logger.log(
      "Sending payload to webhook: " + JSON.stringify(payload, null, 2)
    );

    const response = UrlFetchApp.fetch(WEBHOOK_URL, options);
    const responseCode = response.getResponseCode();
    const responseBody = response.getContentText();

    if (responseCode === 200 || responseCode === 201) {
      Logger.log(
        "Successfully sent to webhook. Response code: " + responseCode
      );
      Logger.log("Response body: " + responseBody);
    } else {
      Logger.log(
        "Warning: Webhook returned non-success status code: " + responseCode
      );
      Logger.log("Response body: " + responseBody);
    }
  } catch (error) {
    Logger.log("Error sending to webhook: " + error.toString());
    Logger.log("Stack trace: " + error.stack);
  }
}

/**
 * Test function to verify the script works
 * Note: This won't work with actual form data, it's just for testing the webhook connection
 */
function testWebhook() {
  const testPayload = {
    firstName: "Test",
    lastName: "User",
    email: "test@example.com",
    whatsappNumber: "+1234567890",
    expectations: "Learning product management",
    howDidYouHear: "Twitter",
    timestamp: new Date().toISOString(),
    formName: "Senpai's PM Dojo Cohort 1",
  };

  Logger.log("Running test...");
  sendToWebhook(testPayload);
  Logger.log("Test complete. Check logs for results.");
}
