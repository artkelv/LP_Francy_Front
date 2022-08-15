import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport(
    {
        host:"smtp.office365.com",
        port:"587",
        secure:"false",
        auth: {
            user: process.env.DATA_USER,
            pass: process.env.DATA_PASS,
        },
        tls:{
            rejectUnauthorized: false
        }
    }
)
async function sendEmailForBroker(){
    const dataMessage = await transporter.sendMail({
        from: '"tutu 👻" <foo@example.com>',
        to: "kelvimarthur@gmail.com",
        subject: "Hello ✔",
        text: "Hello world?",
        html: "<b>Hello world?</b>",
    })
}