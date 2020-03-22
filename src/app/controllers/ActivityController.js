import * as Yup from 'yup';
import Activity from '../models/Activity';
import Task from '../models/Task';

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
    const taskExists = await Task.findOne({
      where: { id: req.body.task_id }
    });

    if (!taskExists) {
      return res.status(400).json({ error: 'Task does not exist' });
    }

    const activity = await Activity.create(req.body);

    return res.json(activity);
  }

  async index(req, res) {
    const { task_id } = req.params;

    // Checks the task exists
    const taskExists = await Task.findOne({
      where: { id: task_id }
    });

    if (!taskExists) {
      return res.status(400).json({ error: 'Task does not exist' });
    }

    const activities = await Activity.findAll({
      where: { task_id },
      attributes: ['id', 'title', 'description', 'created_at']
    });

    return res.json(activities);
  }
}

export default new ActivityController();
