export const checkValidData = (email, password, name) => {
  // 2. RegEx for valid Email (single backslash before the dot)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isEmailValid = emailRegex.test(email);

  // 3. RegEx for password: ≥8 chars, one digit, one lowercase, one uppercase
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const isPasswordValid = passwordRegex.test(password);

  // const fullNameRegex = /^[A-Za-z]+(?: [A-Za-z]+)+$/;
  // const isValidName = fullNameRegex.test(name);

  // 4. Return messages or success flag

  if (!isEmailValid) return "Enter a Valid Email Address";
  if (!isPasswordValid) return "Password is Invalid";
  // if (!isValidName) return "Enter a valid Full Name";
  // both valid
  return null; // or `true`, depending on what your caller expects
};
