import * as mysql from 'mysql';
import config from '../config';
import { string } from 'prop-types';

const pool = mysql.createPool(config.mysql)

export const Query = <T = any> (query: string, value?: any) => {
  return new Promise<T>((resolve, reject) => {
    const sql = mysql.format(query, value);

    pool.query(sql, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

import authors from './queries/authors';

export default {
  authors
}