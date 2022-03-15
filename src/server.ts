import express, { Application, Request, Response } from 'express';
import usersRoutes from './handlers/api/users';
import productsRoutes from './handlers/api/products';
import ordersRoutes from './handlers/api/orders';
import bodyParser from 'body-parser';
import helmet from 'helmet';

const app: Application = express();
app.use(bodyParser.json());
app.use(helmet());

const port = 5000;
const host = 'localhost';

app.listen(port, host, () => console.log('Server ' + host + port));

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Server success!');
});

usersRoutes(app);
productsRoutes(app);
ordersRoutes(app);

export default app;
