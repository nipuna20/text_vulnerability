let sendlink = (email) => {
    const emailSendTemplates = {
        from: "noreply@gmail.com",
        to: email,
        subject: "email verification for " + email,
        text:
            "Welcome E-SHOP !    " + "Your account creation is successful."

          
    };
    return emailSendTemplates;
}

module.exports = { sendlink };