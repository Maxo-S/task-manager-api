const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sarafimovski@gmail.com',
        subject: 'Welcome and Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sarafimovski@gmail.com',
        subject: 'Sorry to see you leaving',
        text: `Hey ${name}, we are sorry to see you leaving. Please provide the reason for your account deletion.`
    })
}

module.exports= {
    sendWelcomeEmail,
    sendCancelationEmail
}