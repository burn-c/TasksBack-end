"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _Task = require('../models/Task'); var _Task2 = _interopRequireDefault(_Task);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _Department = require('../models/Department'); var _Department2 = _interopRequireDefault(_Department);
var _TaskStatu = require('../models/TaskStatu'); var _TaskStatu2 = _interopRequireDefault(_TaskStatu);
var _TaskType = require('../models/TaskType'); var _TaskType2 = _interopRequireDefault(_TaskType);

class TaskController {
  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string(10).required(),
      start_date: Yup.date().required(),
      end_date: Yup.date().required(),
      user_id: Yup.number().required(),
      department_id: Yup.number().required(),
      task_type_id: Yup.number().required(),
      task_status_id: Yup.number().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const newTask = await _Task2.default.create(req.body);

    return res.json(newTask);
  }

  async index(req, res) {
    const { id } = req.params;

    if (id === 'all') {
      // List all data
      const tasks = await _Task2.default.findAll({
        attributes: [
          'id',
          'description',
          'user_id',
          'start_date',
          'end_date',
          'task_type_id',
          'task_status_id'
        ],
        include: [
          {
            model: _User2.default,
            as: 'user',
            attributes: ['name']
          },
          {
            model: _Department2.default,
            as: 'department',
            attributes: ['name']
          },
          {
            model: _TaskStatu2.default,
            as: 'task_status',
            attributes: ['name']
          },

          {
            model: _TaskType2.default,
            as: 'task_type',
            attributes: ['name']
          }
        ]
      });

      return res.json(tasks);
    }

    // Return task for id
    const tasks = await _Task2.default.findByPk(id);

    return res.json(tasks);
  }

  async update(req, res) {
    return res.json({});
  }

  async delete(req, res) {
    return res.json({});
  }
}

exports. default = new TaskController();
