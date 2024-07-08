import { Hono } from "hono";

const blog = new Hono();

blog.post('/', (c) => {
  return c.text('');
});

blog.put('/', (c) => {
  return c.text('');
});

blog.get('/:id', (c) => {
  return c.text('Hello Hono!');
});

export default blog;