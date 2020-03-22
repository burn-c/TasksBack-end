import * as Yup from 'yup';
import TaskStatu from '../models/TaskStatu';

class TaskStatuController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .min(6)
        .required()
    });

    // Validation of schema
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { name } = req.body;

    // Validation if the task status is already registered
    const taskStatusExist = await TaskStatu.findOne({
      where: { name }
    });

    if (taskStatusExist) {
      return res.status(400).json({ error: 'Registered task status' });
    }

    const { id } = await TaskStatu.create(req.body);

    return res.json({
      id,
      name
    });
  }

  async index(req, res) {
    // List all data
    const taskStatus = await TaskStatu.findAll({
      attributes: ['id', 'name']
    });

    return res.json(taskStatus);
  }

  async update(req, res) {
    return res.json({});
  }

  async delete(req, res) {
    return res.json({});
  }
}

export default new TaskStatuController();
