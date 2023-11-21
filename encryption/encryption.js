const aes256 = require('aes256');

const key = 'string-key-1';
const otherKey = 'string-key-2';

const plainText = "Hello, I'm available!";

const encrypted = aes256.encrypt(key, plainText);

console.log(`Encrypted messsage: ${encrypted}`);

const decrypted = aes256.decrypt(key, encrypted);
console.log(`Original messsage: ${decrypted}`);

const failedDecryption = aes256.decrypt(otherKey, encrypted);
console.log(`Failed Descryption message: ${failedDecryption}`);






