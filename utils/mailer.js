import { log } from "console";
import nodemailer from "nodemailer"

export const sendMail = async (to,subject,text)=>{
    try{
        const transport = nodemailer.createTransport({
            host :process.env.MAILTRAP_SMTP_HOST,
            port:MAILTRAP_SMTP_PORT,
            secure : false,
            auth : {
                user: MAILTRAP_SMTP_USER,
                pass : MAILTRAP_SMTP_PASS
            }
        });

    
        const info = await transport.sendMail({
            from : 'Inngest TMS',
            to,
            subject,
            text,
        });

    console.log("Message Sent", info.messageId);
    return info

    }catch(error){
        console.error("Mail error", error.message);
        throw error
    }
}