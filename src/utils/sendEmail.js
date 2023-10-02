const nodemailer = require('nodemailer');
const {google} = require("googleapis");
const clientId = "749986558382-m4q3mhnnum6kqg1575rea1bcu6a4rnmb.apps.googleusercontent.com";
const clientSecret = "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";
const redirectUri = "https://developers.google.com/oauthplayground";
const refreshToken = "1//04OmtqjBZpUlGCgYIARAAGAQSNwF-L9IrexlSCQF8hASxtqzz78_Wb7KRGXjUvQ1As2ROui6Tj3Y79y5_fpBfyvaHdVb1QtAIDH8";

const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);
oAuth2Client.setCredentials({refresh_token: refreshToken});
async function main(){
       const accessToken = await oAuth2Client.getAccessToken(); 

       transporter = nodemailer.createTransport({
           service: "gmail",
           auth: {
             type: "OAuth2",
             clientId,
             clientSecret, 
             refreshToken,
             accessToken,
             user: "priyankara96.github@gmail.com"
        },
      });
} 
main();


let sendEmail = (emailTemplate) => {
    transporter.sendMail(emailTemplate, (err, info) => {
        if(err) {
            console.log(err)
        }else{
            console.log('Email sent: ', info.response)
        }
    });
}

module.exports = {sendEmail};