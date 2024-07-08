import { Hono } from "hono";
import blog from "./blog";
import user from "./user";

const router = new Hono();

router.route('/user', user);
router.route('/blog', blog);

export default router;