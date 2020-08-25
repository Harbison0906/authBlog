import * as dotenv from 'dotenv';

const envFound = dotenv.config();

export default {
  mysql: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA
  },
  auth: {
    secret: process.env.JWT_SECRET
  }
}