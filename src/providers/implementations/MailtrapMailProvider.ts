import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

export class MailtrapMailProvider implements IMailProvider{
      private transporter : Mail;

      constructor(){
            this.transporter = nodemailer.createTransport({
                  host: process.env.MAILTRAP_SMTP,
                  port: parseInt(process.env.MAILTRAP_PORT),
                  auth: {
                    user:  process.env.MAILTRAP_AUTH_USER,
                    pass: process.env.MAILTRAP_AUTH_PASSWORD
                  }
            });
      }

      async sendMail(message: IMessage): Promise<void>{
            await this.transporter.sendMail({
                  to:{
                        name: message.to.name,
                        address: message.to.email,
                  },
                  from:{
                       name: message.from.name,
                       address: message.from.email
                  },
                  subject: message.subject,
                  html: message.body,
            });
      };
}