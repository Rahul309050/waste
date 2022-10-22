// const sgMail = require("@sendgrid/mail");
import sgMail from "@sendgrid/mail";
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const submitFormData = (req, res) => {
  const SEND_GRID_KEY = process.env.SENDGRID_KEY;
  sgMail.setApiKey(SEND_GRID_KEY);

  if (req.method === "POST") {
    console.log(req.body.values);
    const msg = {
      to: "ps7778058@gmail.com", // Change to your recipient
      from: "pksharma@kurage.in", // Change to your verified sender
      subject: "Sending with SendGrid is Fun",
      text: "This is just a test email",
    };

    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
    return res.status(200).json({ msg: "success" });
  }
};

export default submitFormData;
