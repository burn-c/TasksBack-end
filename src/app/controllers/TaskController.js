import * as Yup from 'yup';
import Task from '../models/Task';

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

    const newTask = await Task.create(req.body);

    return res.json(newTask);
  }

  async index(req, res) {
    const { id } = req.params;

    // Return task for id
    if (id) {
      const tasks = await Task.findByPk(id);

      return res.json(tasks);
    }

    // List all data
    const tasks = await Task.findAll({
      attributes: [
        'id',
        'description',
        'start_date',
        'end_date',
        'task_type_id',
        'task_status_id'
      ]
    });

    return res.json(tasks);
  }

  async update(req, res) {
    return res.json({});
  }

  async delete(req, res) {
    return res.json({});
  }
}

export default new TaskController();
