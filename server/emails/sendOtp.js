import nodemailer  from 'nodemailer'

const email = 'mozafarihossein439@gmail.com';
const pass = 'iiei evud rtbd ymtw';

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass
    },
});

export const sendEmailOtp = async (userEmail, name, otp) => {

    let info = await transporter.sendMail({
        from: email,
        to: userEmail,
        subject: "Welcome ✔",
        text: `Hello Dear ${name}`,
        html:
            `<!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <p> Hello and welcome to our website ${name}</p>
                <p>${otp}</p>
            </body>
        </htm>`
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

