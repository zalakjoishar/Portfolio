# EmailJS Setup Instructions

To make your contact form work, you need to set up EmailJS (free service for sending emails from static websites).

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (it's free up to 200 emails/month)

## Step 2: Create Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

```
Subject: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Copy your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key
1. Go to **Account** > **General**
2. Copy your **Public Key** (e.g., `abcdefghijklmnop`)

## Step 5: Update script.js
Open `script.js` and replace these three values:

1. Line 88: Replace `YOUR_PUBLIC_KEY` with your Public Key
2. Line 121: Replace `YOUR_SERVICE_ID` with your Service ID  
3. Line 121: Replace `YOUR_TEMPLATE_ID` with your Template ID

Example:
```javascript
emailjs.init("abcdefghijklmnop"); // Your Public Key

emailjs.send('service_abc123', 'template_xyz789', templateParams)
```

## Step 6: Test the Form
1. Open your portfolio in a browser
2. Fill out the contact form
3. Submit it
4. Check your email inbox for the message

That's it! Your contact form should now work.


