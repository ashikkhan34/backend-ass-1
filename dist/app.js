import express, {} from 'express';
import cors from 'cors';
import { userRoute } from './app/models/user/user.route.js';
const app = express();
// Middlewares
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoute);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
export default app;
//# sourceMappingURL=app.js.map