import * as nodemailer from "nodemailer";
import * as dotenv from "dotenv"
dotenv.config()
class MailService{
    constructor(){
        this.transporter = nodemailer.createTransport({
            service: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true, // true for 465, false for other ports
            logger: true,
            debug: true,
            secureConnection: false,
            auth: {
                user: process.env.SMTP_USER, // generated ethereal user
                pass: process.env.SMTP_PASS, // generated ethereal password
            },
            tls:{
                rejectUnAuthorized:true
            }
        })
    }
    async sendActivationMail(to, link){
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: "Активация аккаунта на " + process.env.APP_URL,
            text: "",
            html: 
                `<div>
                    <h1>Для активации перейдите по ссылке:</h1>
                    <a href="${link}">${link}</a>
                </div>`
        })
    }
    async sendArticleMail(to, link){
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: "Запрос на новую статью",
            text: "",
            html: 
                `<div>
                    <h1>Для активации перейдите по ссылке:</h1>
                    <a href="${link}">${link}</a>
                </div>`
        })
    }
}
const mailService = new MailService();

export default mailService;