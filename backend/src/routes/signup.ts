import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { use } from "hono/jsx";
import { userExists } from "./signin";

const signup = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  };
}>();

signup.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const registeredUser = await userExists(body.email, c.env.DATABASE_URL);
  if(registeredUser){
    return c.json({ message: "User already registered" }, 403)
  }

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password
      }
    });

    const jwt = await sign({id: user.id}, c.env.JWT_SECRET);
    return c.json({ jwt });

  } catch (error) {
    return c.json({ message: error }, 400);
  }
});

export default signup;