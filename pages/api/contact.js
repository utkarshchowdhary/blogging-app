import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            auth: {
                user: process.env.SMTP_USER_NAME,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const mailOptions = {
            from: `${req.body.name} <${req.body.email}>`,
            to: process.env.SMTP_SEND_TO,
            subject: "Blog Automated Mail",
            text: req.body.message,
        };

        try {
            const info = await transporter.sendMail(mailOptions);

            res.status(200).json({
                message: `message sent: ${info.messageId}`,
            });
        } catch (e) {
            res.status(500).json({
                error: "message not sent an error occurred",
            });
        }
    }
}
