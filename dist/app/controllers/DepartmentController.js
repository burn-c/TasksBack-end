"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _Department = require('../models/Department'); var _Department2 = _interopRequireDefault(_Department);

class DepartmentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .min(2)
        .required()
    });

    // Validation of schema
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { name } = req.body;

    // Validation if the department is already registered
    const departmentExist = await _Department2.default.findOne({
      where: { name }
    });

    if (departmentExist) {
      return res.status(400).json({ error: 'Registered department' });
    }

    const { id } = await _Department2.default.create(req.body);

    return res.json({
      id,
      name
    });
  }

  async index(req, res) {
    // List all data
    const departments = await _Department2.default.findAll({
      attributes: ['id', 'name']
    });

    return res.json(departments);
  }

  async update(req, res) {
    return res.json({});
  }

  async delete(req, res) {
    return res.json({});
  }
}

exports. default = new DepartmentController();
