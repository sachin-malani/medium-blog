import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";

const signin = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>();

signin.post('/', async (c) => {
  const body = await c.req.json();
  try {
    const user = await userExists(body.email, c.env.DATABASE_URL);
    
    if(!user){
      return c.json({ message: "User not found" }, 403);
    }

    const jwt = await sign({ id: user}, c.env.JWT_SECRET)
    return c.json({ jwt });

  } catch (error) {
    return c.json({ message: error}, 403);
  }
});

export const userExists = async (email: string, url: string) => {
  const prisma = new PrismaClient({
    datasourceUrl: url
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    });
    return !user ? null : user.id;
    
  } catch (error) {
    return null;
  } 
  finally {
    await prisma.$disconnect;
  }
}

export default signin;