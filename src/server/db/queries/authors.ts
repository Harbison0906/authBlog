import { Query } from '../';

const findOneByEmail = async (email: string) => Query(`SELECT * FROM Authors WHERE email = '${email}' LIMIT 1`);
const findOneById = async (id: number) => Query(`SELECT * FROM Authors WHERE id = ${id} LIMIT 1`)
const all = () => Query('');
const one = () => Query('', []);
const insert = (newAuthor: any) => Query('INSERT INTO Authors SET ?', [newAuthor]);
const update = () => Query('', []);
const destroy = () => Query('', []);



export default { findOneByEmail, findOneById, all, one, insert, update, destroy }