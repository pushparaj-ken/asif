import { OAuth2Client } from 'google-auth-library';
import nodemailer, { Transporter } from 'nodemailer';

const ClientId = process.env.ClientId;
const ClientSecret = process.env.ClientSecret;
const RefreshToken = process.env.RefreshToken;
const recipients = process.env.recipients;

const createTransporter = async (): Promise<Transporter> => {
  const oauth2Client = new OAuth2Client(
    ClientId,
    ClientSecret,
    'https://developers.google.com/oauthplayground'
  );

  oauth2Client.setCredentials({
    refresh_token: RefreshToken,
  });

  const accessToken = await oauth2Client.getAccessToken();
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'pushparaj7396@gmil.com',
      accessToken: accessToken.token ?? '',
      clientId: ClientId,
      clientSecret: ClientSecret,
      refreshToken: RefreshToken,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  return transporter;
};

async function sendErrorEmail(errorDetails: string, body: object, apiName: string): Promise<void> {
  const mailOptions = {
    from: 'no-reply.asif.com',
    to: recipients,
    subject: 'API Error Notification',
    text: `API Name: ${process.env.fullPublicUrl + apiName}\n\nError Body: ${JSON.stringify(body)}\n\nError Stack: ${errorDetails}`,
  };
  const emailTransporter = await createTransporter();
  emailTransporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

async function sendEmail(toemail: string, subject: string, text: string): Promise<void> {
  const torecipients = toemail.split(',');
  const mailOptions = {
    from: 'no-reply.asif.com',
    to: torecipients,
    subject: subject,
    text: text,
  };
  console.log("🚀 ~ sendEmail ~ mailOptions:", mailOptions)
  const emailTransporter = await createTransporter();
  emailTransporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

export { sendErrorEmail, sendEmail };
