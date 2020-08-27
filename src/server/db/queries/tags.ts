import { Query } from '../';


const all = () => Query('');
const one = () => Query('', []);
const insert = (newTag: any) => Query('INSERT INTO Tags SET ?', newTag);
const update = () => Query('', []);
const destroy = () => Query('', []);



export default { all, one, insert, update, destroy }