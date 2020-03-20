import * as Yup from 'yup';
import TaskType from '../models/TaskType';

class TaskTypeController {
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

    // Validation if the task type is already registered
    const taskTypeExist = await TaskType.findOne({
      where: { name }
    });

    if (taskTypeExist) {
      return res.status(400).json({ error: 'Registered task type' });
    }

    const { id } = await TaskType.create(req.body);

    return res.json({
      id,
      name
    });
  }

  async update(req, res) {
    return res.json({});
  }

  async index(req, res) {
    return res.json({});
  }

  async delete(req, res) {
    return res.json({});
  }
}

export default new TaskTypeController();
