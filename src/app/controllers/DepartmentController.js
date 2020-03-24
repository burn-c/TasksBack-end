import * as Yup from 'yup';
import Department from '../models/Department';

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
    const departmentExist = await Department.findOne({
      where: { name }
    });

    if (departmentExist) {
      return res.status(400).json({ error: 'Registered department' });
    }

    const { id } = await Department.create(req.body);

    return res.json({
      id,
      name
    });
  }

  async index(req, res) {
    // List all data
    const departments = await Department.findAll({
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

export default new DepartmentController();
