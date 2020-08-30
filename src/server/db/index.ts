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
import blogs from './queries/blogs';
import blogtags from './queries/blogtags';
import tags from './queries/tags';
import tokens from './queries/tokens';

export default {
  authors,
  blogs,
  blogtags,
  tags,
  tokens
}