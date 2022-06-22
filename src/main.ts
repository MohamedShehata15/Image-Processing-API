import { CustomServer } from './core/CustomServer';
import { ImageRouter } from './Routes/ImageRouter';
import { QueryValidator } from './Middlewares/QueryValidatorMiddleware';

/**
 * Initialize Server
 */
const app = new CustomServer();

/**
 * Use Middleware
 */
app.middleware(new QueryValidator());

/**
 * Init Routes
 */
app.route(new ImageRouter());

/**
 * Start Application
 */
app.listen(4000);

export default app;
