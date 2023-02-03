const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'gmail',
    auth: {
        user: 'gain.space.noreply@gmail.com',
        pass: 'cvtpvgtwpvxcjxpi'
    }
});

const options = {
    from: "auto.gainspace@outlook.com",
    to: "edwin.pietrowski@gmail.copm",
    subject: "welcome to GainSpace!",
    text: "We are so hyped to have you here, hope you find the extra push you need to meet your goals with the help of our community."
};

transporter.sendMail(options, function(err, info) {
    if(err){
        console.log(err);
        return;
    }
    console.log("Sent:" + info.response);
});