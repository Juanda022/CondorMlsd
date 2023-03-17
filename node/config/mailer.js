import nodemailer  from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'juan90282.jdrt17@gmail.com', // generated ethereal user
      pass: 'qpoelkaddlhogzdn', // generated ethereal password
    },
  });

  transporter.verify().then(() => {
    console.log("Ya se puede usar")
  })