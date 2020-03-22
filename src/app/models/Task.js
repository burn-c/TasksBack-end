import Sequelize, { Model } from 'sequelize';

class Task extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE
      },
      {
        sequelize
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    });
    this.belongsTo(models.Department, {
      foreignKey: 'department_id',
      as: 'department'
    });

    this.belongsTo(models.TaskType, {
      foreignKey: 'task_type_id',
      as: 'task_type'
    });

    this.belongsTo(models.TaskStatu, {
      foreignKey: 'task_status_id',
      as: 'task_status'
    });
  }
}

export default Task;
