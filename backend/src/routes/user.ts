import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signinInput, signupInput } from "@kichak/medium-blog";

const user = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

user.post("/signup", async (c) => {
  const body = await c.req.json();

  const { success } = signupInput.safeParse(body);
  if (!success) {
    return c.json({ message: "Invalid inputs" }, 400);
  }

  const registeredUser = await userExists(body.email, c.env.DATABASE_URL);
  if (registeredUser) {
    return c.json({ message: "User already registered" }, 403);
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
      },
    });

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt });
  } catch (error) {
    return c.json({ message: error }, 500);
  }
});

user.post("/signin", async (c) => {
  try {
    const body = await c.req.json();

    const { success } = signinInput.safeParse(body);
    if (!success) {
      return c.json({ message: "Invalid inputs" }, 400);
    }

    const user = await userExists(body.email, c.env.DATABASE_URL);

    if (!user) {
      return c.json({ message: "User not found" }, 403);
    }

    if (body.password !== user.password) {
      return c.json({ message: "Invalid Password" }, 403);
    }

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt });
  } catch (error) {
    return c.json({ message: error }, 403);
  }
});

export const userExists = async (email: string, url: string) => {
  const prisma = new PrismaClient({
    datasourceUrl: url,
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return !user ? null : user;
  } catch (error) {
    return null;
  } finally {
    await prisma.$disconnect;
  }
};

export default user;
