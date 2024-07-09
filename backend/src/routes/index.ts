import { Hono } from "hono";
import blog from "./blog";
import user from "./user";

const app = new Hono();

app.route('/user', user);
app.route('/blog', blog);

export default app;