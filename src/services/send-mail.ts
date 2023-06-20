import nodemailer from "nodemailer";
import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";
import { SendMailProps } from "@utils";
dotenv.config();

export const sendEMail = async ({ mailTo, subject, text }: SendMailProps) => {
  const client = new MailtrapClient({
    endpoint: process.env.MAIL_TRAP_URL,
    token: process.env.TOKEN as string,
  });

  const sender = {
    email: "mailtrap@mailtrap.personal",
    name: "Mailtrap Test",
  };
  const recipients = [
    {
      email: "nodegmrv1@gmail.com",
    },
  ];

  client
    .send({
      from: sender,
      to: recipients,
      subject: "You are awesome!",
      text: "Congrats for sending test email with Mailtrap!",
      category: "Integration Test",
    })
};
