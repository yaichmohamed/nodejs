// task 4:
const generatePassword = require('generate-password');

function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 10,
    numbers: true,
    symbols: true,
  });
  return password;
}

const randomPassword = generateRandomPassword();
console.log('Random Password:', randomPassword);
