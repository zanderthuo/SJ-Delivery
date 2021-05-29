// email-activation-link
// confirm password reset 
exports.confirmResetPasswordEmail = () => {
  const message = {
    subject: 'Password Changed',
    text:
      `You are receiving this email because you requested to changed your password. \n\n` +
      `If you did not request this change, please contact us immediately.`
  };
  return message;
};

// email activation link
exports.emailActivationLink = (host, token) => {
  const message = {
    subject: 'Email Activation Link',
    text: `Please click on the link given to Activate your account</h2>
    <a>${host}/activate-account/${token}`
  }
  return message
}

// restpassword mail template
exports.resetPasswordEmail = (host, restLink) => {
    const message = {
        subject: 'Reset Password',
        text:
        `${
            'You are receiving this email because you have requested to reset your password for your account.\n\n' +
            'Please click on the following link, or paste it into your browser to complete the process:\n\n' +
            'http://'
          }${host}/reset-password/${restLink}\n\n` +
          `If you did not request this, please ignore this email and your password will remain unchanged.\n`
    }

    return message
}

// rider-signup
exports.riderSignup = (host, { resetlink, email } ) => {
  const message = {
    subject: 'Registration Successful🎊🎊',
    text: `${
      'Congratulations! Your application has been accepted. Please complete your Rider account signup by clicking on the link below. \n\n' +
      'Please click on the following link, or paste this link into your browser to complete the process:\n\n' +
      'http://'
    }${host}/rider-signup/${resetlink}?email=${email}\n\n`
  };

  return message;
};

// rider-application
exports.riderApplicationEmail = () => {
    const message = {
      subject: 'Application To be a Rider',
      text: `We have received your request! Our team will contact you soon. \n\n`
    };
  
    return message;
};

// rider-welcome
exports.riderWelcome = first_name => {
    const message = {
      subject: 'Welcome Rider🎊🎊',
      text:
        `Hi ${first_name}! Congratulations! Your application for a Rider account has been accepted. \n\n` +
        `It looks like you already have a User account with us. Please sign in with your User credentials and you will be able to see your Rider account.`
    };
  
    return message;
  };

// agent-signup
exports.agentSignup = (host, { resetlink, email } ) => {
  const message = {
    subject: 'Registration Successful🎊🎊',
    text: `${
      'Congratulations! Your application has been accepted. Please complete your Agent account signup by clicking on the link below. \n\n' +
      'Please click on the following link, or paste this link into your browser to complete the process:\n\n' +
      'http://'
    }${host}/rider-signup/${resetlink}?email=${email}\n\n`
  };

  return message;
};

// agent-application
exports.riderApplicationEmail = () => {
  const message = {
    subject: 'Application To be a Agent',
    text: `We have received your request! Our team will contact you soon. \n\n`
  };

  return message;
};

// agent-welcome
exports.agentWelcome = first_name => {
  const message = {
    subject: 'Welcome Agent🎊🎊',
    text:
      `Hi ${first_name}! Congratulations! Your application for an Agent account has been accepted. \n\n` +
      `It looks like you already have a User account with us. Please sign in with your User credentials and you will be able to see your Agent account.`
  };

  return message;
};
