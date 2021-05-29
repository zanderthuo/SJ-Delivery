const mg = require('../config/mailgun');
const emailTemplate = require('../helpers/emailTemplate');

exports.sendEmail = async (email, type, host, data) => {
    let result
    let response
  
    try {
      const message = prepareTemplate(type, host, data)

      response = await mg.sendEmail(email, message)
      console.log('my response', mg.sendEmail(email, message))
    } catch (error) {}
  
    if (response) {
      result = response
    }
  
    return result
};

const prepareTemplate = (type, host, data) => {
    let message

    switch (type) {
        case 'email-activation-link':
            message = emailTemplate.emailActivationLink(host, data)
            break
        case 'reset-password-confirmation':
            message = template.confirmResetPasswordEmail()
            break
        case 'rider-signup':
            message = emailTemplate.riderSignup(host, data)
            break
        case 'rider-application':
            message = emailTemplate.riderApplicationEmail()
            break;
        case 'rider-welcome':
            message = emailTemplate.riderWelcome(data)
            break     
        default:
            message = '';
    }

    return message
}

