import { Hono } from "hono";
import { verify } from "hono/jwt";

const blog = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  };
}>();

blog.use('/*' , async (c, next) => {
  try {
    const header = c.req.header("authorization") || "";
    const token = header.split(" ")[1];

    const jwt = await verify(token, c.env.JWT_SECRET);
  
    if(jwt){
      await next();
    }
    return c.json({ message: "Unauthorized" }, 403);
  } catch (error) {
    return c.json({ message: "Invalid headers" }, 403);
  }

});

blog.post('/', (c) => {
  return c.text('BLog post');
});

blog.put('/', (c) => {
  return c.text('');
});

blog.get('/:id', (c) => {
  return c.text('Hello Hono!');
});

export default blog;