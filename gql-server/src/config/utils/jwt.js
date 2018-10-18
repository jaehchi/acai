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

export const getUserID = async (context) => {
  
  const isAuthenticated = context.request.get('Authorization');

  if (isAuthenticated) {
    const token = isAuthenticated.replace('Bearer ', '');
    const { userId } = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
    return userId;
  }

  throw new Error('Not authenticated');
};