export function login_validate(values) {
  const errors = {};

  // Email Validation
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // Password Validation
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password";
  }

  return errors;
}

export function user_details_validate(values) {
  const errors = {};

  //Firstname validate
  if (!values.firstname) {
    errors.firstname = "Required!";
  }

  //Lastname validate
  if (!values.lastname) {
    errors.lastname = "Required!";
  }

  //Email validation
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
}

export function choose_pass_validation(values) {
  const errors = {};

  // Password Validation
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be greater than 8 character!";
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = "Must contain at least one uppercase letter!";
  } else if (!/[a-z]/.test(values.password)) {
    errors.password = "Must contain at least one lowercase letter!";
  } else if (!/\d/.test(values.password)) {
    errors.password = "Must contain at least one number!";
  } else if (!/\d/.test(values.password)) {
    errors.password = "Must contain at least one number!";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password";
  }

  //   //Comfirm Password Validation
  if (!values.conpassword) {
    errors.conpassword = "Required!";
  } else if (values.password !== values.conpassword) {
    errors.conpassword = "Password is not match!";
  }
  return errors;
}

export function be_organizer_validation(values) {
  const errors = {};

  if (!values.organization_name) {
    errors.organization_name = "Required!";
  }

  if (!values.organization_facebook) {
    errors.organization_facebook = "Required!";
  }

  if (!values.organization_email) {
    errors.organization_email = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.organization_email)
  ) {
    errors.organization_email = "Invalid email address";
  }

  return errors;
}
