# Google Form Webhook Setup Instructions

This guide will help you set up the webhook integration for your Google Form "Senpai's PM Dojo Cohort 1".

## Overview

The script automatically sends form submission data to your webhook endpoint whenever a user submits the form. File uploads (Proof of Payment) are excluded from the webhook payload.

## Setup Steps

### 1. Open Your Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Open the form titled **"Senpai's PM Dojo Cohort 1"**

### 2. Access the Apps Script Editor

1. Click on the three dots menu (⋮) in the top right corner
2. Select **"Script editor"** (or go to **Extensions > Apps Script**)
3. This will open the Google Apps Script editor in a new tab

### 3. Add the Script

1. In the Apps Script editor, you'll see a default `Code.gs` file
2. Delete any existing code in the file
3. Copy the entire contents of the `webhook-sender.gs` file
4. Paste it into the `Code.gs` file in the Apps Script editor
5. Click the **Save** button (disk icon) or press `Ctrl+S` / `Cmd+S`
6. Give your project a name (e.g., "Form Webhook Integration")

### 4. Create the Form Submit Trigger

1. In the Apps Script editor, click on the **clock icon** (⏰) on the left sidebar (Triggers)
2. Click **"+ Add Trigger"** button in the bottom right
3. Configure the trigger with these settings:
   - **Choose which function to run:** `onFormSubmit`
   - **Choose which deployment should run:** `Head`
   - **Select event source:** `From form`
   - **Select event type:** `On form submit`
4. Click **"Save"**

### 5. Grant Permissions

1. When you save the trigger, Google will ask you to authorize the script
2. Click **"Review Permissions"**
3. Select your Google account
4. You may see a warning "This app isn't verified" - click **"Advanced"**
5. Click **"Go to [Your Project Name] (unsafe)"**
6. Review the permissions and click **"Allow"**

The script needs these permissions:
- Connect to external services (to send data to the webhook)
- Access your forms and responses

### 6. Test the Integration (Optional)

You can test the webhook connection without submitting the form:

1. In the Apps Script editor, select `testWebhook` from the function dropdown at the top
2. Click the **"Run"** button (▶️)
3. Check the execution log by clicking **"Execution log"** at the bottom
4. You should see a success message if the webhook is working

### 7. Verify Form Submissions

1. Submit a test response to your Google Form
2. Go back to the Apps Script editor
3. Click on **"Executions"** (list icon) in the left sidebar
4. You'll see a log of all executions
5. Click on the latest execution to see the logs
6. Verify that the data was sent successfully (look for "Successfully sent to webhook")

## What Data Gets Sent

The webhook receives the following data in JSON format:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "whatsappNumber": "+1234567890",
  "expectations": "I want to learn product management",
  "howDidYouHear": "Twitter",
  "timestamp": "2025-11-03T12:34:56.789Z",
  "formName": "Senpai's PM Dojo Cohort 1"
}
```

**Note:** The "Upload Proof of Payment" field is intentionally excluded from the webhook payload.

## Webhook Endpoint

- **URL:** `https://us-central1-goalmatics.cloudfunctions.net/webhook/yps8c5x9`
- **Method:** POST
- **Content-Type:** application/json

## Troubleshooting

### Check Execution Logs

If submissions aren't being sent:

1. Go to Apps Script editor
2. Click **"Executions"** in the left sidebar
3. Look for errors in recent executions
4. Click on any failed execution to see detailed error messages

### Common Issues

**Issue:** "Script not running on form submit"
- **Solution:** Make sure the trigger is properly configured (see Step 4)

**Issue:** "Permission denied errors"
- **Solution:** Re-authorize the script (see Step 5)

**Issue:** "Webhook not receiving data"
- **Solution:** 
  - Check the execution logs to confirm the script is running
  - Verify the webhook URL is correct
  - Use the `testWebhook()` function to test connectivity

**Issue:** "Field names don't match"
- **Solution:** Make sure your form question titles exactly match:
  - "First Name"
  - "Last Name"
  - "Email Address"
  - "WhatsApp Number"
  - "What are your expectations from this course?"
  - "How did you hear about this course?"

### Viewing Logs

To see detailed logs:
1. In Apps Script editor, run the script or wait for a form submission
2. Click **View > Logs** or press `Ctrl+Enter` / `Cmd+Enter`
3. Or check the "Executions" page for historical logs

## Updating the Webhook URL

If you need to change the webhook URL:

1. Open the Apps Script editor
2. Find the line: `const WEBHOOK_URL = 'https://us-central1-goalmatics.cloudfunctions.net/webhook/yps8c5x9';`
3. Update the URL
4. Save the script

## Support

If you encounter any issues:
- Check the execution logs for error messages
- Verify all form field names match exactly
- Ensure the webhook endpoint is accessible
- Test using the `testWebhook()` function

---

**Created for:** Senpai's PM Dojo Cohort 1  
**Last Updated:** November 3, 2025

