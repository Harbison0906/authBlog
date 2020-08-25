import { Query } from '../';


const all = () => Query('');
const one = () => Query('', []);
const insert = (newAuthor: any) => Query('INSERT INTO Authors SET ?', [newAuthor]);
const update = () => Query('', []);
const destroy = () => Query('', []);



export default { all, one, insert, update, destroy }