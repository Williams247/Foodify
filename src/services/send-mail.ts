import nodemailer from "nodemailer";
import { MailtrapClient } from "mailtrap"
import dotenv from "dotenv";
import { SendMailProps } from "@utils";
dotenv.config();

export const sendEMail = async ({ mailTo, subject, text }: SendMailProps) => {

const TOKEN = "2b16d9a51c3cdef5432f8a7482818d15";
const ENDPOINT = "https://send.api.mailtrap.io/";

const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

const sender = {
  email: "mailtrap@mailtrap.personal",
  name: "Mailtrap Test",
};
const recipients = [
  {
    email: "nodegmrv1@gmail.com",
  }
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);

};
