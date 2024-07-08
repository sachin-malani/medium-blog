import { Hono } from 'hono'
import router from './routes';

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
  }
}>()

app.route('/api/v1', router);

app.get('/', (c) => {
  return c.text('Hi There');
});

export default app;
