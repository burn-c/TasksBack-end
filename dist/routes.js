"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _SessionController = require('./app/controllers/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);
var _DepartmentController = require('./app/controllers/DepartmentController'); var _DepartmentController2 = _interopRequireDefault(_DepartmentController);
var _TaskTypeController = require('./app/controllers/TaskTypeController'); var _TaskTypeController2 = _interopRequireDefault(_TaskTypeController);
var _TaskStatuController = require('./app/controllers/TaskStatuController'); var _TaskStatuController2 = _interopRequireDefault(_TaskStatuController);
var _TaskController = require('./app/controllers/TaskController'); var _TaskController2 = _interopRequireDefault(_TaskController);
var _ActivityController = require('./app/controllers/ActivityController'); var _ActivityController2 = _interopRequireDefault(_ActivityController);

var _auth = require('./app/middlewares/auth'); var _auth2 = _interopRequireDefault(_auth);

const routes = new (0, _express.Router)();

routes.post('/sessions', _SessionController2.default.store);

routes.use(_auth2.default);
routes.post('/users', _UserController2.default.store);
routes.put('/users', _UserController2.default.update);
routes.get('/users', _UserController2.default.index);

routes.post('/task', _TaskController2.default.store);
routes.get('/task/id/:id', _TaskController2.default.index);

routes.post('/department', _DepartmentController2.default.store);
routes.get('/department', _DepartmentController2.default.index);

routes.post('/task/type', _TaskTypeController2.default.store);
routes.get('/task/type', _TaskTypeController2.default.index);

routes.post('/task/status', _TaskStatuController2.default.store);
routes.get('/task/status', _TaskStatuController2.default.index);

routes.post('/task/activity', _ActivityController2.default.store);
routes.get('/task/activity/:task_id', _ActivityController2.default.index);

exports. default = routes;
