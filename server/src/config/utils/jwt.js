import { sign, verify } from 'jsonwebtoken';
import { success, error } from '../../lib/logger';

export const generateToken = async (id) => { 
  const payload = {
    // exp: (Date.now() / 1000) + 604800,
    userID : id,
  };

  const token = sign(payload, process.env.TOKEN_SECRET_KEY);

  return token;
};

export const getUserID = async (req) => {
  
  const isAuthenticated = req.get('Authorization');

  if (isAuthenticated) {
    const token = isAuthenticated.replace('Bearer ', '');
    const { userID } = verify(token, process.env.TOKEN_SECRET_KEY);
    return userID;
  }

  throw new Error('Not authenticated');
};