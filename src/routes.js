import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import DepartmentController from './app/controllers/DepartmentController';
import TaskTypeController from './app/controllers/TaskTypeController';
import TaskStatuController from './app/controllers/TaskStatuController';
import TaskController from './app/controllers/TaskController';
import ActivityController from './app/controllers/ActivityController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.post('/users', UserController.store);
routes.put('/users', UserController.update);
routes.get('/users', UserController.index);

routes.post('/task', TaskController.store);
routes.get('/task', TaskController.index);

routes.post('/department', DepartmentController.store);
routes.get('/department', DepartmentController.index);

routes.post('/task/type', TaskTypeController.store);
routes.get('/task/type', TaskTypeController.index);

routes.post('/task/status', TaskStatuController.store);
routes.get('/task/status', TaskStatuController.index);

routes.post('/task/activity', ActivityController.store);
routes.get('/task/activity/:task_id', ActivityController.index);

export default routes;
