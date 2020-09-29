import { Query } from '../';


const all = () => Query('SELECT Blogs.*, Authors.name FROM Blogs JOIN Authors on Authors.id = Blogs.id');
const one = (id: number) => Query('SELECT * FROM Blogs WHERE id=?', [id]);
const insert = ( title: string, content: string, authorid: number) => Query('INSERT INTO Blogs SET title=?, content=?, authorid=?', [title, content, authorid]);
const update = (id: number, title: string, content: string) => Query('UPDATE Blogs SET title=?, content=? WHERE id=?', [title, content, id]);
const destroy = (id: number) => Query('DELETE FROM Blogs WHERE id=?', [id]);



export default { all, one, insert, update, destroy }