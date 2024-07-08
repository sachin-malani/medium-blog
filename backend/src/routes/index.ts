import { Hono } from "hono";
import signup from "./signup";
import signin from "./signin";
import blog from "./blog";

const router = new Hono();

router.route('/signup', signup);
router.route('/signin', signin);
router.route('/blog', blog);

export default router;