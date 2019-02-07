import { generate, characters } from 'shortid';

export const shortUrl = async () => {
  characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
  return generate();
};
