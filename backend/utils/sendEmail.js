import nodeMailer from 'nodemailer'

export const sendEmail = async({email, subject, message}) => {
    const user = process.env.HOST
    const task = process.env.SERVICE
    const janeythau = process.env.SPORT
    const mail = process.env.MAIL
    const pass = process.env.PASSWORD
    const transporter = nodeMailer.createTransport({
        host: user,
        service: task,
        port: janeythau,
        auth: {
            user: mail,
            pass: pass
        }
    })
    const options = {
        from: mail,
        to: email,
        subject: subject,
        text: message
    }
    await transporter.sendMail(options)
}