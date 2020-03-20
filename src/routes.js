import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import DepartmentController from './app/controllers/DepartmentController';
import TaskTypeController from './app/controllers/TaskTypeController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

routes.post('/department', DepartmentController.store);

routes.post('/task/type', TaskTypeController.store);

export default routes;
