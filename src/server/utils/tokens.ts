import * as jwt from 'jsonwebtoken';
import config from '../config';
import { IPayload } from './types';
 
export const createToken = (payload: IPayload) => {
  const token = jwt.sign(payload, config.auth.secret, { expiresIn: '7d' }); 
  return token;
}


/*
  {
    userid: 4
  }
*/