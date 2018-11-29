import { createCipher, createDecipher } from 'crypto';

const algo = process.env.CRYPTO_ALGO;
const password = process.env.CRYPTO_PASSWORD;
const input = 'utf8';
const output = 'hex';

export const encrypt = async (id) => {
  const cipher = await createCipher(algo, password);
  let crypted = await cipher.update(id, input, output);
  crypted += cipher.final(output);
  return crypted;
}

export const decrypt = async (encrypted) => {
  const decipher = await createDecipher(algo, password);
  let decrypted = await decipher.update(encrypted, output, input);
  decrypted += decipher.final(input);
  return decrypted;
};
