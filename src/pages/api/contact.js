import FormData from "form-data";
import Mailgun  from "mailgun";

export default async function handler(req, res) {
    const {name, email, message} = req.body

  const API_KEY = process.env.MAILGUN_API_KEY;
  const DOMAIN = process.env.MAILGUN_DOMAIN;

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({ username: "api", key: API_KEY });

  const messageData = {
    from: "Contact Form <cont@mg.mailgun.org>",
    to: "justplainrodney@gmail.com",
    subject: "Hello",
    text: `Hello, 
    
    You have a new form entry from: ${name} ${email}.
    
    ${message}`
  };

  try {
    const emailRes = await client.messages.create(DOMAIN, messageData)
    console.log(emailRes)
  } catch(error) {
    console.error('Error sending email', error)
  } 
  res.status(200).json({ submitted: true });
}
