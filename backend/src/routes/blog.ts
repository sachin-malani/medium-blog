import { Hono } from "hono";
import { verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlogInput, updateBlogInput } from "@kichak/medium-blog";

const blog = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blog.use("/*", async (c, next) => {
  try {
    const header = c.req.header("authorization") || "";
    const token = header.split(" ")[1];

    const user = await verify(token, c.env.JWT_SECRET);

    if (user) {
      c.set("userId", user.id as string);
      await next();
    }
    return c.json({ message: "Unauthorized" }, 403);
  } catch (error) {
    return c.json({ message: "Invalid headers" }, 403);
  }
});

blog.post("/", async (c) => {
  try {
    const body = await c.req.json();

    const { success } = createBlogInput.safeParse(body);
    if (!success) {
      return c.json({ message: "Invalid inputs" }, 400);
    }

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const authorId = c.get("userId");

    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: Number(authorId),
      },
      select: {
        id: true,
      },
    });

    return c.json({ id: blog.id });
  } catch (error) {
    return c.json({ message: error }, 500);
  }
});

blog.put("/", async (c) => {
  try {
    const body = await c.req.json();

    const { success } = updateBlogInput.safeParse(body);
    if (!success) {
      return c.json({ message: "Invalid inputs" }, 400);
    }

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const update = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return c.json({ message: "Updated Succefully", update });
  } catch (error) {
    return c.json({ message: error }, 500);
  }
});

blog.get("/id/:id", async (c) => {
  try {
    const id = await c.req.param("id");
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const getBlog = await prisma.post.findFirst({
      where: {
        id: Number(id),
      },
    });

    return c.json({ getBlog });
  } catch (error) {
    return c.json({ message: error }, 500);
  }
});

blog.get("/bulk", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const getBlog = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return c.json({ getBlog });
  } catch (error) {
    return c.json({ message: error }, 500);
  }
});

export default blog;
