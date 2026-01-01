# Email Setup Instructions

## मेल सेटअप कसा करावा (How to Setup Email)

### Step 1: EmailJS Account बनवा (Create EmailJS Account)

1. या लिंक वर जा: **https://www.emailjs.com/**
2. **Sign Up** वर क्लिक करा आणि account बनवा (Google account वापरू शकता)
3. Login करा

### Step 2: Email Service जोडा (Add Email Service)

1. Dashboard मध्ये **Email Services** वर जा
2. **Add New Service** वर क्लिक करा
3. **Gmail** निवडा
4. तुमचा email (sangleaditya824@gmail.com) जोडा
5. **Create Service** वर क्लिक करा
6. **Service ID** कॉपी करून ठेवा - हे काम येईल

### Step 3: Email Template बनवा (Create Email Template)

1. Dashboard मध्ये **Email Templates** वर जा
2. **Create New Template** वर क्लिक करा
3. Template असे बनवा:

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Content:**
```
You have received a new message from your portfolio website!

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Save** करा
5. **Template ID** कॉपी करून ठेवा

### Step 4: Public Key मिळवा (Get Public Key)

1. Dashboard मध्ये **Account** → **General** वर जा
2. **Public Key** कॉपी करा

### Step 5: Contact.jsx मध्ये IDs Update करा

**File:** `src/components/Contact.jsx`

Lines 26-28 मध्ये replace करा:

```javascript
// EmailJS configuration
const serviceId = 'YOUR_SERVICE_ID_HERE';    // Step 2 मधला Service ID टाका
const templateId = 'YOUR_TEMPLATE_ID_HERE';  // Step 3 मधला Template ID टाका
const publicKey = 'YOUR_PUBLIC_KEY_HERE';    // Step 4 मधली Public Key टाका
```

**Example:**
```javascript
const serviceId = 'service_abc123';
const templateId = 'template_xyz789';
const publicKey = 'kL9mN2pQ4rS6tU8v';
```

### Step 6: Test करा (Test)

1. `npm run dev` चालू करा
2. Contact form भरा
3. Submit करा
4. तुम्हाला **sangleaditya824@gmail.com** वर message येईल!

---

## Important Notes:

✅ **Free Plan:** EmailJS free plan मध्ये महिन्याला 200 emails मोकळे आहेत
✅ **No UI Changes:** UI मध्ये काहीही change नाही, फक्त backend email functionality जोडली
✅ **Direct to Email:** आता messages WhatsApp ऐवजी directly तुमच्या email वर येतील

---

## Troubleshooting:

**Problem:** Email येत नाही?
- Gmail मध्ये **Spam folder** तपासा
- EmailJS dashboard मध्ये "Logs" तपासा
- Service ID, Template ID, Public Key योग्य आहे का ते तपासा

**Problem:** Error येतो?
- Browser console तपासा (F12)
- Internet connection तपासा

---

Need help? मला विचारा! 😊
