import { Query } from '../';

const find = (column: string, value: string | number) => Query('SELECT * FROM Authors WHERE ?? = ?', [column, value])
const all = () => Query('');
const one = () => Query('', []);
const insert = (newAuthor: any) => Query('INSERT INTO Authors SET ?', [newAuthor]);
const update = () => Query('', []);
const destroy = () => Query('', []);



export default { find, all, one, insert, update, destroy }