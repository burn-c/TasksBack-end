"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _Activity = require('../models/Activity'); var _Activity2 = _interopRequireDefault(_Activity);
var _Task = require('../models/Task'); var _Task2 = _interopRequireDefault(_Task);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class ActivityController {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string()
        .min(4)
        .required(),
      description: Yup.string()
        .min(10)
        .required(),
      user_id: Yup.number().required(),
      task_id: Yup.number().required()
    });

    // Validation of schema
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    // Checks the task exists
    const taskExists = await _Task2.default.findOne({
      where: { id: req.body.task_id }
    });

    if (!taskExists) {
      return res.status(400).json({ error: 'Task does not exist' });
    }

    const activity = await _Activity2.default.create(req.body);

    return res.json(activity);
  }

  async index(req, res) {
    const { task_id } = req.params;

    // Checks the task exists
    const taskExists = await _Task2.default.findOne({
      where: { id: task_id }
    });

    if (!taskExists) {
      return res.status(400).json({ error: 'Task does not exist' });
    }

    const activities = await _Activity2.default.findAll({
      where: { task_id },
      attributes: [
        'id',
        'user_id',
        'title',
        'description',
        'created_at',
        'updated_at'
      ],
      include: [
        {
          model: _User2.default,
          as: 'user',
          attributes: ['name']
        }
      ]
    });

    return res.json(activities);
  }
}

exports. default = new ActivityController();
